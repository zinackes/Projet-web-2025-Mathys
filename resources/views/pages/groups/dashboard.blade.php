<x-app-layout>
    <x-slot name="header">
    </x-slot>


    <div class="flex flex-col gap-8">
        <!-- Titre en haut comme d'habitude -->
        <!--<h1 class="!text-5xl !font-black text-center font-archivo mt-4">
            Bienvenue {{ auth()->user()->first_name }}
        </h1>-->

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
            <div class="grid grid-cols-3 gap-4 ">
                <div class="card col-span-3">
                    <div class="card-header">
                        <h3 class="card-title">
                            Informations sur le repo
                        </h3>
                    </div>
                    <div class="card-body flex gap-5">
                        <a href="" class="flex items-center" id="github_img_link" target="_blank" rel="noopener noreferrer">
                            <img src="" id="github-img" alt="" class="!w-100 !h-auto object-contain border-r pr-5">
                        </a>

                        <div class="grid justify-between grid-cols-2 gap-y-6">
                            <div class="flex gap-2 items-start">
                                <!-- Icône -->
                                <div class="px-1 py-1 flex items-center bg-gray-100/50 rounded-lg border !border-gray-300">
                                    <i class="ki-filled ki-folder"></i>
                                </div>

                                <!-- Texte -->
                                <div class="flex flex-col gap-2 mt-1">
                                    <span class="text-sm text-gray-700 text-xs leading-tight">Nom</span>
                                    <span class="text-sm font-semibold" id="github_repo_name">Chargement du nom...</span>
                                </div>
                            </div>

                            <div class="flex gap-2 items-start">
                                <!-- Icône -->
                                <div class="px-1 py-1 flex items-center bg-gray-100/50 rounded-lg border !border-gray-300">
                                    <i class="ki-filled ki-crown"></i>
                                </div>

                                <!-- Texte -->
                                <div class="flex flex-col gap-2 mt-1">
                                    <span class="text-sm text-gray-700 text-xs leading-tight">Créateur</span>
                                    <span class="text-sm font-semibold" id="github_repo_owner">Chargement du nom...</span>
                                </div>
                            </div>

                            <div class="flex gap-2 items-start">
                                <!-- Icône -->
                                <div class="px-1 py-1 flex items-center bg-gray-100/50 rounded-lg border !border-gray-300">
                                    <i class="ki-filled ki-code"></i>
                                </div>

                                <!-- Texte -->
                                <div class="flex flex-col gap-2 mt-1">
                                    <span class="text-sm text-gray-700 text-xs leading-tight">Language</span>
                                    <span class="text-sm font-semibold" id="github_repo_language">Chargement du language...</span>
                                </div>
                            </div>

                            <div class="flex gap-2 items-start">
                                <!-- Icône -->
                                <div class="px-1 py-1 flex items-center bg-gray-100/50 rounded-lg border !border-gray-300">
                                    <i class="ki-filled ki-users"></i>
                                </div>

                                <!-- Texte -->
                                <div class="flex flex-col gap-2 mt-1">
                                    <span class="text-sm text-gray-700 text-xs leading-tight">Contributeurs</span>
                                    <span class="text-sm font-semibold" id="github_repo_contributors">Chargement du nombre de contributeur...</span>
                                </div>
                            </div>

                            <div class="flex gap-2 items-start">
                                <!-- Icône -->
                                <div class="px-1 py-1 flex items-center bg-gray-100/50 rounded-lg border !border-gray-300">
                                    <i class="ki-filled ki-users"></i>
                                </div>

                                <!-- Texte -->
                                <div class="flex flex-col gap-2 mt-1">
                                    <span class="text-sm text-gray-700 text-xs leading-tight">Date Création</span>
                                    <span class="text-sm font-semibold" id="github_repo_creation_date">Chargement de la date de création...</span>
                                </div>
                            </div>

                            <div class="flex gap-2 items-start">
                                <!-- Icône -->
                                <div class="px-1 py-1 flex items-center bg-gray-100/50 rounded-lg border !border-gray-300">
                                    <i class="ki-filled ki-users"></i>
                                </div>

                                <!-- Texte -->
                                <div class="flex flex-col gap-2 mt-1">
                                    <span class="text-sm text-gray-700 text-xs leading-tight">Dernière Mise a jour</span>
                                    <span class="text-sm font-semibold" id="github_repo_update_date">Chargement de la date de mise a jour...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--
                <div class="card col-span-1">
                    <div class="card-header">
                        <h3 class="card-title">
                            Liste des branches
                        </h3>
                    </div>
                    <div class="card-table">
                        <table class="table align-middle text-gray-700 font-medium text-sm">
                            <thead>
                            <tr>
                                <th>
                                    Nom
                                </th>
                            </tr>
                            </thead>
                            <tbody id="github_repo_table_body">
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="card col-span-2">
                    <div class="card-header">
                        <h3 class="card-title">
                            Liste des commits
                        </h3>
                    </div>
                    <div class="card-table">
                        <table class="table align-middle text-gray-700 font-medium text-sm">
                            <thead>
                            <tr>
                                <th>
                                    Nom
                                </th>
                            </tr>
                            </thead>
                            <tbody id="github_repo_table_body">
                            </tbody>
                        </table>
                    </div>
                </div>
                -->
                <div id="chart" class="col-span-3"></div>
            </div>
        @endif
    </div>

    <script type="module" src="{{asset('js/githubApi.js')}}"></script>

</x-app-layout>
