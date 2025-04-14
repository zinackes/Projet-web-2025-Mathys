<x-app-layout>
    <x-slot name="header">
    </x-slot>


    <div class="flex flex-col gap-8">
        <!-- Titre en haut comme d'habitude -->
        <h1 class="!text-5xl !font-black text-center font-archivo mt-4">
            Bienvenue {{ auth()->user()->first_name }}
        </h1>

        @if(!$group->github_link)
            <div class="flex flex-1 flex-col gap-4 items-center justify-center py-20">
                <h2 class="text-2xl font-archivo !font-bold text-center max-w-2xl">
                    Pour voir vos informations, vous devez entrer le lien GitHub de votre projet
                </h2>
                <form action="{{route('group.updateGithub')}}" method="POST" class="w-full flex gap-3 flex-col items-center">
                    @csrf
                    <x-forms.input name="github_link" class="w-2/5"
                                   :value="old('github_link')" type="text" :placeholder="__('Lien github du projet')"
                                   :messages="$errors->get('github_link')"/>

                    <x-forms.input name="group_id" class="hidden" :value="$group->id" type="text" />


                    <x-forms.primary-button class="w-1/7">
                        {{ __('Valider') }}
                    </x-forms.primary-button>
                </form>
            </div>
        @else
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">
                        Information sur le repo
                    </h3>
                </div>
                <div class="card-body">
                    <div class="flex">
                        <div class="px-1 py-1 flex items-center bg-gray-100/50 rounded-lg border !border-gray-300">
                            <i class="ki-filled ki-folder"></i>
                        </div>
                        <span></span>
                    </div>
                </div>
            </div>
        @endif
    </div>

    <script src="{{asset('js/githubApi.js')}}"></script>

    <script type="module">
        import { Octokit } from "https://esm.sh/octokit";

        const octokit = new Octokit(); // Non authentifié (60 req/h)

        async function getCommitsByUserPerDay(owner, repo) {
            let page = 1;
            let allCommits = [];
            let hasMore = true;

            while (hasMore) {
                const res = await octokit.request('GET /repos/{owner}/{repo}/commits', {
                    owner,
                    repo,
                    per_page: 100,
                    page
                });

                const commits = res.data;
                allCommits.push(...commits);
                hasMore = commits.length === 100;
                page++;
            }

            // Structure: { 'user': { 'YYYY-MM-DD': count } }
            const grouped = {};

            allCommits.forEach(commit => {
                const date = new Date(commit.commit.author.date).toISOString().split('T')[0];
                const author = commit.author?.login || commit.commit.author.name || 'Inconnu';

                if (!grouped[author]) grouped[author] = {};
                if (!grouped[author][date]) grouped[author][date] = 0;
                grouped[author][date]++;
            });

            // Récupère toutes les dates triées (même celles manquantes chez certains users)
            const allDates = Array.from(
                new Set(allCommits.map(c => new Date(c.commit.author.date).toISOString().split('T')[0]))
            ).sort();

            // Convertir au format ApexCharts
            const chartData = Object.entries(grouped).map(([user, commits]) => {
                const data = allDates.map(date => {
                    return [new Date(date).getTime(), commits[date] || 0];
                });
                return { name: user, data };
            });

            console.log(chartData); // 🔥 À utiliser dans ApexCharts
            return chartData;
        }

        // 👉 Ton lien de repo (à adapter dynamiquement si besoin)
        const repoUrl = "https://github.com/MathysSclafer/doctor-lib";
        const [owner, repo] = new URL(repoUrl).pathname.slice(1).split('/');

        window.chartData = getCommitsByUserPerDay(owner, repo);
        </script>

</x-app-layout>
