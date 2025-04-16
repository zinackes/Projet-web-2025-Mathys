<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class GithubController extends Controller
{

    public function showPreviewImage($owner, $repo)
    {
        $url = "https://github.com/{$owner}/{$repo}";
        $image = $this->getGithubPreviewImage($url);

        return response()->json([
            'preview_image' => $image
        ]);
    }

    private function getGithubPreviewImage($repoUrl)
    {
        try {
            $response = Http::get($repoUrl);

            if (!$response->successful()) {
                throw new \Exception('Erreur lors de la requête HTTP.');
            }

            $html = $response->body();

            // Extract the img with a regex
            preg_match('/<meta property="og:image" content="([^"]+)"/i', $html, $matches);


            if (isset($matches[1])) {
                return $matches[1]; // URL of img
            }

            return null;

        } catch (\Exception $e) {
            \Log::error("Erreur récupération image GitHub : " . $e->getMessage());
            return null;
        }
    }


    public function showLanguages($owner, $repo){

        $response = Http::withToken(env('GITHUB_TOKEN'))
            ->get("https://api.github.com/repos/{$owner}/{$repo}/languages");

        $languages = $response->json();

        arsort($languages);

        $mainLanguages = array_key_first($languages);
        $byteSize =  $languages[$mainLanguages];

        return response()->json([
            'main_languages' => $mainLanguages,
            'bytes' => $byteSize
        ]);
    }

    public function showContributors($owner, $repo){

        $response = Http::withToken(env('GITHUB_TOKEN'))
            ->get("https://api.github.com/repos/{$owner}/{$repo}/contributors");

        return response()->json($response->json());
    }

    public function showRepo($owner, $repo){

        $response = Http::withToken(env('GITHUB_TOKEN'))
            ->get("https://api.github.com/repos/{$owner}/{$repo}");

        return response()->json($response->json());
    }

    public function showBranches($owner, $repo){

        $response = Http::withToken(env('GITHUB_TOKEN'))
            ->get("https://api.github.com/repos/{$owner}/{$repo}/branches");

        return response()->json($response->json());
    }

    public function showCommits($owner, $repo)
    {
        $allCommits = [];
        $page = 1;
        $perPage = 100; // Max GitHub
        $maxCommits = 150;

        while (count($allCommits) < $maxCommits) {
            $response = Http::withToken(env('GITHUB_TOKEN'))
                ->get("https://api.github.com/repos/{$owner}/{$repo}/commits", [
                    'page' => $page,
                    'per_page' => $perPage
                ]);

            $commits = $response->json();

            if (!$commits || !is_array($commits)) {
                break;
            }

            $allCommits = array_merge($allCommits, $commits);
            $page++;

            if (count($commits) < $perPage) {
                break; // plus de pages
            }
        }

        // Limiter à 150
        $allCommits = array_slice($allCommits, 0, $maxCommits);

        return response()->json($allCommits);
    }
}
