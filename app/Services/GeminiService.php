<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class GeminiService
{
    protected string $endpoint = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

    public function generateText(string $prompt): string
    {
        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
        ])->post($this->endpoint . '?key=' . env('GEMINI_API_KEY'), [
            'contents' => [
                [
                    'parts' => [
                        ['text' => $prompt]
                    ]
                ]
            ]
        ]);

        if ($response->successful()) {
            return $response->json()['candidates'][0]['content']['parts'][0]['text'] ?? 'Réponse vide.';
        }

        return 'Erreur: ' . $response->body();
    }
}
