export const apiFetching = async (dispatch) =>{
    let res = await fetch("https://api.github.com/search/repositories?q=created:%3E2023-07-09&sort=stars&order=desc&page=1")
    let data = await res.json();
    console.log(data.items);
    dispatch({
        type: "userRepo",
        payload:data.items
    })
}

export async function graph(login,repo,setCommit){
    const api = await fetch(`https://api.github.com/repos/${login}/${repo}/stats/commit_activity`);
    const response = await api.json();
    setCommit(response)
}


export async function contribution1(login,repo,setContribution){
    const api = await fetch(`https://api.github.com/repos/${login}/${repo}/stats/contributors`);
    
    const response = await api.json();
    console.log(response);
    setContribution(response)
}