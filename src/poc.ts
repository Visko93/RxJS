interface PostProps {
  body: string;
  id: number;
  title: string;
  userId: number;
}

async function handleFetch(): Promise<any> {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      console.log(res);

      res.json();
    })
    .then((data: any) => {
      console.log(data);
    });
}

const optionCreator = (label: string) => {
  return `<option key="${label}" value="${label}">${label}</option>`;
};

const button = document.querySelector("#hello");
const nameSelect = document.querySelector("#names");
const versionSelect = document.querySelector("#versions");

console.log(button, nameSelect, versionSelect);
