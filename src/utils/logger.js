// Function that displays details about the repository in the console (GitHub REST API)
const github = (owner, repo) => {
    // Get a repository
    fetch(`https://api.github.com/repos/${owner}/${repo}`)
        .then((response) => response.json())
        .then((result) => {
            console.log(result)
        })
        .catch((error) => {
            console.error('Error:', error)
        })
}

export { github as default }
