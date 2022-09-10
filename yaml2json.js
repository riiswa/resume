const yaml = require('js-yaml');
const fs = require('fs');

const data = yaml.load(fs.readFileSync('data.yml', {encoding: 'utf-8'}));

function filterData(profile){
  return {
    ...data,
    jobs: data.jobs.filter((value) => profile.jobs.includes(value.id)),
    projects: data.projects.filter((value) => profile.projects.includes(value.id)),
  };
}

fs.readdirSync("profiles").forEach(profile => {
  if (profile.endsWith(".yml")) {
    fs.writeFileSync(`${profile.split(".")[0]}.json`,
      JSON.stringify(
        filterData(
            yaml.load(fs.readFileSync(`profiles/${profile}`, {encoding: 'utf-8'}))
        ),
        null,
        2
      )
    )
  }
});
