import fs from "fs";

interface Character {
  name: string;
  title: string;
  description: string;
}

const readData = (filePath: string): Character[] => {
  let data: string = "";
  try {
    data = fs.readFileSync(filePath, "utf8");
  } catch (err) {
    console.log(err);
  }

  return data
    .replace(/(\r\n|\n|\r)/gm, "")
    .split(/Title: /)
    .filter((c) => c != "")
    .map((c) => {
      const characterInfo = c.split(/Name: |Description: /);
      return {
        name: characterInfo[1],
        title: characterInfo[0],
        description: characterInfo[2],
      };
    });
};

function main() {
  const inputFilePath = "./data.txt";
  const outputFilePath = "./output.json";

  const charList: Character[] = readData(inputFilePath);
  console.log(charList);
  fs.writeFileSync(outputFilePath, JSON.stringify(charList));
}

main();
