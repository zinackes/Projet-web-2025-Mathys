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
        console.log("Données du groupe :", groupdata);

        const url = new URL(groupdata.github_link);
        let [owner, repo] = url.pathname.slice(1).split('/');
        repo = repo.split('-');

        console.log("Owner :", owner);
        console.log("Repo :", repo);
        document.querySelector('#github_repo_name').textContent = repo;

        // Exemple : on récupère les 10 derniers commits
        const commits = await octokit.request('GET /repos/{owner}/{repo}/commits', {
            owner,
            repo,
            per_page: 10
        });

        console.log("Commits :", commits.data);
    } catch (error) {
        console.error("Erreur :", error);
    }
}

main();
