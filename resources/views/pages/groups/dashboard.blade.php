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
                    <div class="flex gap-2 items-start">
                        <!-- Icône -->
                        <div class="px-1 py-1 flex items-center bg-gray-100/50 rounded-lg border !border-gray-300">
                            <i class="ki-filled ki-folder"></i>
                        </div>

                        <!-- Texte -->
                        <div class="flex flex-col gap-2 mt-1">
                            <span class="text-sm text-gray-700 leading-tight">Nom</span>
                            <span class="text-sm font-semibold" id="github_repo_name">Chargement du nom...</span>
                        </div>
                    </div>
                </div>
            </div>
        @endif
    </div>

    <script type="module" src="{{asset('js/githubApi.js')}}"></script>

</x-app-layout>
