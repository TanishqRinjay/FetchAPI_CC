let url = "https://kontests.net/api/v1/all";
let response = fetch(url);
response.then((v)=>{
    return v.json();
}).then((contests)=>{
    console.log(contests);
    let iHTML="";
    contests.forEach(contest => {
        iHTML+=`
        <div class="card">
            <img src="https://cms-assets.themuse.com/media/lead/_1200x630_crop_center-center_82_none/01212022-1047259374-coding-classes_scanrail.jpg?mtime=1642798879" alt="">
            <div class="content">
                <h2>${contest.name}</h2>
                <p>Site: ${contest.site}</p>
                <p>Start Time:\n${contest.start_time}</p>
                <p>End Time: \n${contest.end_time}</p>
                <div class="button">
                    <a target="_blank" href="${contest.url}">Click to Visit</a>
                </div>
            </div>
        </div>
        `
        contestSection.innerHTML=iHTML;
    });
})