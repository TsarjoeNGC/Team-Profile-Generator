const renderTeam = (team) => {
    const renderManager = (manager) => `
                <div class="card col-3 me-3 mb-5 employee-card">
                  
                    <div class="card-header employee-header">
                        <h2 class="card-title">${manager.name}</h2>
                        <h3 class="card-title"><i class="fa-solid fa-people-roof"></i> ${manager.title}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${manager.id}</li>
                            <li class="list-group-item">
                                Email: <a href="mailto:${manager.email}">${manager.email}</a>
                            </li>
                            <li class="list-group-item">Office number: ${manager.officeNumber}</li>
                        </ul>
                    </div>
                </div>
        `;

    const renderEngineer = (engineer) => `
                <div class="card col-3 me-3 mb-5 employee-card">
                   
                    <div class="card-header employee-header">
                        <h2 class="card-title">${engineer.name}</h2>
                        <h3 class="card-title"><i class="fa-solid fa-wrench"></i> ${engineer.title}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${engineer.id}</li>
                            <li class="list-group-item">
                                Email: <a href="mailto:${engineer.email}">${engineer.email}</a>
                            </li>
                            <li class="list-group-item">
                                GitHub:
                                <a href="https://github.com/${engineer.gitHub}" target="_blank"
                                    rel="noopener noreferrer">${engineer.gitHub}</a>
                            </li>
                        </ul>
                    </div>
                </div>
        `;

        const renderIntern = (intern) => `
        <div class="card col-3 me-3 mb-5 employee-card">
           
            <div class="card-header employee-header">
                <h2 class="card-title">${intern.name}</h2>
                <h3 class="card-title"><i class="fa-solid fa-wrench"></i> ${intern.title}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${intern.id}</li>
                    <li class="list-group-item">
                        Email: <a href="mailto:${intern.email}">${intern.email}</a>
                    </li>
                    <li class="list-group-item">School: ${intern.school}</li>
                </ul>
            </div>
        </div>
`;


const html = [];

html.push(team.filter((employee) => employee.getRole() === 'Manager').map((manager) => renderManager(manager)));

html.push(
team
    .filter((employee) => employee.getRole() === 'Engineer')
    // Map all engineer data so that it displays as a html card
    .map((engineer) => renderEngineer(engineer))
    .join('')
);

    html.push(
        team
            .filter((employee) => employee.getRole() === 'Intern')
            .map((intern) => renderIntern(intern))
            // Join all the cards up so that they're not on separate indexes
            .join('')
    );

    // Return the Completed HTML
    return html.join('');
};


// Create main html
const renderMain = (team) => `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profiles</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
        crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="team-profile-header col-12 mb-3 team-profile jumbotron">
                <h1 class="team-profile-title text-center">Meet The Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-mem-container col-12 d-flex flex-wrap justify-content-around">
                ${renderTeam(team)}
            </div>
        </div>
    </div>
</body>
<script src="https://kit.fontawesome.com/cba39ebf54.js" crossorigin="anonymous"></script>

</html>
`;

module.exports = renderMain;
