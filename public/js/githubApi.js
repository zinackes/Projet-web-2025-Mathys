import { Octokit } from "https://esm.sh/octokit";

const octokit = new Octokit();

async function main() {
    const urlParams = new URLSearchParams(window.location.search);
    const groupId = urlParams.get('group');

    if (!groupId) {
        console.error("ID de groupe manquant dans l'URL");
        return;
    }

    try {
        const response = await fetch(`/api/group-info/${groupId}`);
        if (!response.ok) {
            throw new Error("Erreur lors de la récupération du groupe");
        }

        const groupdata = await response.json();

        const url = new URL(groupdata.github_link);
        let [owner, repo] = url.pathname.slice(1).split('/');
        let repoName = repo.replace(/[-_]/g, ' ')
            .replace(/\b\w/g, char => char.toUpperCase());

        document.querySelector('#github_repo_name').textContent = repoName;
        document.querySelector('#github_repo_owner').textContent = owner;

        // Exemple : on récupère les 10 derniers commits
        const commits = await octokit.request('GET /repos/{owner}/{repo}/commits', {
            owner,
            repo,
            per_page: 10
        });


        const languagesRequest = await fetch(`/api/github-languages/${owner}/${repo}`);

        if(languagesRequest.ok){
            const languagesData = await languagesRequest.json();
            document.querySelector('#github_repo_language').textContent = languagesData.main_languages;
            document.querySelector('#github_img_link').href = groupdata.github_link;
        }

        const contributorsRequest = await fetch(`/api/github-contributors/${owner}/${repo}`);
        if(contributorsRequest.ok){
            const contributorsData = await contributorsRequest.json();
            document.querySelector('#github_repo_contributors').textContent = contributorsData.length;
        }

        const repoRequest = await fetch(`/api/github-repo/${owner}/${repo}`);

        if(repoRequest.ok){
            const repoData = await repoRequest.json();
            document.querySelector('#github_repo_creation_date').textContent = formatDateFr(repoData.created_at);
            document.querySelector('#github_repo_update_date').textContent = formatDateFr(repoData.updated_at);
        }

        /*const branchesRequest = await fetch(`/api/github-branches/${owner}/${repo}`);

        if(branchesRequest.ok){
            const branchesData = await branchesRequest.json();
            let tableBody = document.querySelector('#github_repo_table_body');
            if(branchesData.length >= 5){
                for(let i = 0; i < 6; i++){
                    const tr = document.createElement('tr');
                    tableBody.appendChild(tr);
                    const th = document.createElement('th');
                    if(i < 5){
                        th.textContent = branchesData[i].name;
                    }
                    else{
                        th.textContent = "...";
                    }
                    tr.appendChild(th);
                }

            }
            else{
            for(let i = 0; i < branchesData.length; i++){
                const tr = document.createElement('tr');
                tableBody.appendChild(tr);
                const th = document.createElement('th');
                th.textContent = branchesData[i].name;
                tr.appendChild(th);
            }}

        }*/

        await showGithubImage(owner, repo);


    } catch (error) {
        console.error("Erreur :", error);
    }
}

main();


function formatDateFr(isoDateString) {
    const date = new Date(isoDateString);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${day}/${month}/${year} à ${hours}:${minutes}`;
}


async function showGithubImage(owner, repo) {
    try {
        // Effectuer la requête GET vers l'API
        const response = await fetch(`/api/github-img/${owner}/${repo}`);


        // Vérifier si la réponse est valide
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération de l\'image');
        }

        // Récupérer les données de la réponse
        const data = await response.json();


        // Vérifier si une image a été trouvée
        if (data.preview_image) {
            // Mettre l'URL de l'image dans la balise <img> HTML
            document.getElementById('github-img').src = data.preview_image;
        } else {
            console.error('Aucune image trouvée pour ce dépôt.');
        }
    } catch (error) {
        console.error('Erreur:', error);
    }
}


