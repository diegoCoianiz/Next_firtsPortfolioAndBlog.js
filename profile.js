export const Skills = [
    {
        name: "Node.Js",
        percentage: 80
    },
    {
        name: "Python",
        percentage: 60
    },
    {
        name: "C#",
        percentage: 40
    },
    {
        name: "Git",
        percentage: 60
    },
    {
        name: "Machine Learning",
        percentage: 40
    },
    {
        name: "HTML, CSS, JS",
        percentage: 80
    },
]

const lorem = `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
ex ea commodo consequat."
`
const lorem_min = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
`

const lorem_def = `
Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de 
diseño para probar el diseño visual antes de insertar el texto final.

Aunque no posee actualmente fuentes para justificar sus hipótesis, el profesor de filología clásica Richard McClintock 
asegura que su uso se remonta a los impresores de comienzos del siglo xvi.1​ Su uso en algunos editores de texto muy 
conocidos en la actualidad ha dado al texto lorem ipsum nueva popularidad.

El texto en sí no tiene sentido aparente, aunque no es aleatorio, sino que deriva de un texto de Cicerón en lengua latina,
 a cuyas palabras se les han eliminado sílabas o letras. El significado del mismo no tiene importancia, ya que solo es 
 una demostración o prueba. El texto procede de la obra De finibus bonorum et malorum (Sobre los límites del bien y del
mal) que comienza con:
' Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... '
`
let myExperience = [
    {
        title: "sofware developer at Google",
        description: lorem,
        date: "2000 - 2007"
    },
    {
        title: "sofware developer at Microsoft",
        description: lorem,
        date: "2007 - 2011"
    },
    {
        title: "sofware developer at Facebook",
        description: lorem,
        date: "2011 - 2017"
    },
    {
        title: "sofware developer at Tesla",
        description: lorem,
        date: "2017 - now"
    },
]

export const Experience = myExperience.reverse()

export const Projects = [
    {
        name: "React Native app!",
        content: lorem_min,
        linkImg: `https://www.simplilearn.com/ice9/free_resources_article_thumb/React_Native_Tutorial.jpg` 
    },
    {
        name: "React web site!",
        content: lorem_min,
        linkImg: `https://techblog.sdstudio.top/wp-content/uploads/2021/09/ba11d056cec27254d89b310745e4071b-1-750x430.png` 
    },
    {
        name: "Node.js Bot!",
        content: lorem_min,
        linkImg: `https://centribal.com/wp-content/uploads/2021/07/Bot-de-Facebook-Messenger-gu%C3%ADa-de-integraci%C3%B3n-con-Centribot.png` 
    },
    {
        name: "Pac Man!",
        content: lorem_min,
        linkImg: `https://indiehoy.com/wp-content/uploads/2022/08/pacman.jpg` 
    },
    {
        name: "BlockChain Smart Contract",
        content: lorem_min,
        linkImg: `https://enzyme.biz/hs-fs/hubfs/iStock-935228958.jpg?width=2335&name=iStock-935228958.jpg` 
    },
    {
        name: "Crypto Dashboard",
        content: lorem_min,
        linkImg: `https://www.shutterstock.com/image-photo/cryptocurrency-trading-bitcoin-graphic-mining-600w-2062238537.jpg` 
    },
]

export const post = [
    {
        title: "React",
        content: lorem,
        img: `https://blog.back4app.com/wp-content/uploads/2021/08/Backend-for-React-585x1024.png`,
        id_url: "react",
        lorem_def: lorem_def
    },
    {
        title: "Travel",
        content: lorem_min,
        img: `https://www.clarin.com/img/2022/03/28/noASdX_BT_1256x620__1.jpg`,
        id_url:"travel",
        lorem_def: lorem_def
    },
    {
        title: "World Cup",
        content: lorem,
        img: `https://www.afa.com.ar/upload/torneo/Placas%20categor%C3%ADas/2022/Noviembre/fecha%20fifa%20feb.jpg`,
        id_url: "world_cup",
        lorem_def: lorem_def
    },
]