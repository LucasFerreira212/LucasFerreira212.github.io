const closeModalAction = document.querySelector('.modal .ri-close-line')
const modal = document.querySelector('.modal')
const modalTitle = modal.querySelector('.title h2')
const modalDescription = modal.querySelector('.info p')
const modalDate = modal.querySelector('span')
const modalLinkProject = modal.querySelector('.links a.link-project')
const modalLinkRepository = modal.querySelector('.links a.link-repository')
const modalLinkLinkedin = modal.querySelector('.links a.link-linkedin')
const iframe = modal.querySelector('.video iframe')
const highlightsProjectsContainer = document.querySelector('.highlights .cards-projects');
const allProjectsContainer = document.querySelector('.allprojects .cards-projects');
const HIGHTLIGHT_TYPE = 2;
const ALL_TYPE = 1;

const getProjectsByTypeOrAll = (typeId) => {
  const dataProjects = [
    {
      id: 20,
      type: 2,
      title: 'TODO List',
      date: 'Agosto de 2024',
      languages: ['html', 'css', 'javascript'],
      description: `
      O projeto TODO List - uma agenda funcional, podendo adicionar taferas, marcar quando concluí-las, editar e até excluir.  🧾✍<br /> <br />

      Criei essa agenda junto com um curso que fiz, seguindo os passos do professor e absorvendo conteúdo. <br /> <br />

      ✨ Principais funcionalidades: <br /> <br />

      • Adicionar Tarefas <br />
      • Pesquisar Tarefas (de acordo com o texto nomeado) <br />
      • Filtrar Tarefas (todas, feitas ou a fazer) <br />
      • Editar Tarefas <br />
      • Marcar as Tarefas após concluí-las <br />
      • Excluir Tarefas <br /> <br />

      🚀 Tecnologias utilizadas: <br /> <br />

      • HTML5 <br />
      • CSS3 <br />
      • JavaScript <br />

      `,
      imgSrc: 'assets/projects/todo.jpg',
      repository: 'https://github.com/LucasFerreira212/TODO',
      site: ''
    },
    {
      id: 1,
      type: 1,
      title: 'Apple Page',
      date: 'Abril de 2024',
      languages: ['html', 'css', 'javascript'],
      description: `A empresa de produtos tecnológicos Apple, é uma das maiores e mais ricas de todo o mundo. Diante disso, achei interessante criar uma página de venda do Iphone 15 Pro. 🍎<br /> <br />

        Fiz esse projeto ao decorrer de um curso, dos quais terminei há um tempo. Entramos em um ponto do curso onde estávamos aptos a criar e recriar algumas coisas. E um exemplo disso foi essa página de vendas da Apple.<br /> <br />

        A stack é simples, apenas utilizando as 3 ferramentas bases da Web, sendo elas HTML5, CSS3 e JavaScript. <br />
`,
      imgSrc: 'assets/projects/apple-page.jpg',
      repository: 'https://github.com/LucasFerreira212/pagina-iPhone-15-Pro',
      site: ''
    },
    {
      id: 3,
      type: 2,
      title: 'Github Finder',
      date: 'Outubro de 2024',
      languages: ['react','vite','typescript','nodejs'],
      description: `O Github Finder é um projeto bem legal e dinâmico, tendo como objetivo principal procurar por perfis do Gituhub. Além disso, é possível observar os melhores projetos dos usuários e ir até seu repositório.<br><br>

        Esse projeto foi desenvolvido com as seguintes ferramentas: <br><br>
        
        • React; <br>
        • Vite; <br>
        • TypeScript; <br>
        • Github API; <br>
        • Node.js; <br>
        `,
        imgSrc: 'assets/projects/githubfinder.jpg',
        repository: 'https://github.com/LucasFerreira212/GithubFinder',
        site: ''
        
      },
      {
        id: 2,
        type: 2,
        title: 'Campo Minado',
        date: 'Junho de 2024',
        languages: ['java'],
        description: `Para quem não sabe, campo minado é um jogo onde você precisa sobrevivier das bombas clicando <br> nos espaços aonde elas não estão, se clicar na bomba - Perde, se não - Ganha. <br> Consegui criar uma réplica bem legal deste clássico jogo. <br>
          
          Mas e aí, você já jogou Campo Minado?<br><br>
  
          Apesar de parecer um projeto díficil de fazer, eu apenas utilizei Java <br> com a sua biblioteca de componentes visuais Swing.`,
        imgSrc: 'assets/projects/campo-minado.jpg',
        repository: 'https://github.com/LucasFerreira212',
        site: 'https://drive.google.com/drive/u/0/folders/1c3tnVg5WZ_HLQ5tFPfbi8edoNLdWQK4b'
      },
    {
      id: 4,
      type: 1,
      title: 'Calculadora',
      date: 'Maio de 2024',
      languages: ['java'],
      description: `Talvez você sabe que a calculadora é o projeto mais comum dos programadores, sejam eles especializados no Front-End ou em Back-End. E assim como eles, tive que fazer a minha. 😂<br><br>Para construí-la utilizei Java com a sua incrível biblioteca de componentes visuais Swing. <br><br>
        Algumas features que valem destacar: <br><br>
        • Ao "fechar" a calculadora os dados do display são apagados; <br>
        • Só é possível adicionar um ponto decimal; <br>
        • O tamanho da fonte do display se adapta conforme os números são adicionados;`,
      imgSrc: 'assets/projects/calculadora.jpg',
      repository: 'https://github.com/LucasFerreira212',
      site: 'https://drive.google.com/drive/u/0/folders/1fqp7GPyJ7Q61En2CrNUsRiEMLt_Ue26a'
    },
    {
      id: 5,
      type: 1,
      title: 'Instagram',
      date: 'Março de 2024',
      languages: ['html', 'css'],
      description: `O Instagram é uma rede social gratuita onde usuários podem compartilhar fotos e vídeos, interagir com publicações de outros usuários através de curtidas, comentários e compartilhamentos, e utilizar diversas ferramentas como Stories, Reels, Instagram Live e Instagram Shopping. <br><br>
        Além disso, é a 3ª (terceira) rede social mais utilizada do mundo, contando com cerca de 2 bilhões de usuários ativos, de acordo com o Neil Patel. <br><br>
        Tendo isso em mente, pensei em criar um clone da página de login do Instagram, apenas utilizando HTML5 e CSS3.`,
      imgSrc: 'assets/projects/instagram.jpg',
      repository: 'https://github.com/LucasFerreira212',
      site: ''
    },
    {
      id: 6,
      type: 1,
      title: 'World Fly',
      date: 'Fevereiro de 2024',
      languages: ['html', 'css'],
      description: "Criei este projeto bem no começo da minha jornada como programador. Quando conheci a área da programação, começei estudando o básico: HTML e CSS. Depois de um tempo, tinha capacidade o suficiente para criar um site de uma companhia aérea fictícia.",
      imgSrc: 'assets/projects/world-fly.jpg',
      repository: 'https://github.com/LucasFerreira212',
      site: ''
    },
    
  ];

  return typeId ? dataProjects.filter(({ type }) => type === typeId) : dataProjects;
}

const allProjects = getProjectsByTypeOrAll(ALL_TYPE);
const hightLightProjects = getProjectsByTypeOrAll(HIGHTLIGHT_TYPE);

const renderProjects = (container, data) => {
  container.innerHTML = data.map(({ id, title, imgSrc, date, languages }) => {
    return `
        <div class="box" id="${id}">
          <div class="cover">
            <img src=${imgSrc} alt="dowhile 2021">
            <div class="details">
              <p>${title}</p>
              <div class="mini-languages">
                ${languages.map((language) => `<img src="assets/mini-languages/${language}.svg" alt="${language}">`)}
              </div>
            </div>
          </div>
          <div class="description">
            <p>${date}</p>
            <a>Ver mais</a>
          </div>
        </div>
      `
  }).join('');
}

const renderSkillsSection = () => {
  const cardsContainer = document.querySelector('.cards');

  const skills = [
    {
      name: 'HTML5',
      src: 'html'
    },
    {
      name: 'CSS3',
      src: 'css'
    },
    {
      name: 'JavaScript',
      src: 'javascript'
    },
    {
      name: 'TypeScript',
      src: 'typescript'
    },
    {
      name: 'React.js',
      src: 'react'
    },
    {
      name: 'Node.js',
      src: 'nodejs'
    },
    {
      name: 'Material UI',
      src: 'materialui'
    },
    {
      name: 'Vite',
      src: 'vite'
    },
    {
      name: 'Figma',
      src: 'figma'
    },
    {
      name: 'Java',
      src: 'java'
    },
    {
      name: 'Spring Boot',
      src: 'springboot'
    },
    {
      name: 'C#',
      src: 'cs'
    },
    {
      name: 'Python',
      src: 'python'
    },
    {
      name: 'SQL',
      src: 'sql'
    },
    {
      name: 'Git',
      src: 'git'
    },
    {
      name: 'Postman',
      src: 'postman'
    },
  ]

  cardsContainer.innerHTML = skills.map(({ name, src }, index) => `
    <div class="box" key="${index}">
      <p>${name}</p>
      <img src="assets/languages/${src}.svg" alt="html">
    </div>
  `).join('')
}

const addData = ({ title, description, date, site, repository, linkedin}) => {
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  document.body.classList.add('transparent')
  modalTitle.innerHTML = title
  modalDescription.innerHTML = description
  modalDate.innerHTML = date
  modalLinkProject.setAttribute('href', site)
  modalLinkRepository.setAttribute('href', repository)
  modalLinkLinkedin.setAttribute('href', linkedin)

}

const insertProjectAction = () => {
  projectsBox.forEach((project) => {
    const id = Number(project.getAttribute('id'));

    project.addEventListener('click', () => {
      const allProjects = getProjectsByTypeOrAll();
      const foundProject = allProjects.find((project) => project.id === id);
      addData(foundProject);
    })
  });
}

const closeModal = () => {
  modal.classList.add('hidden')
  document.body.style.overflow = 'visible';
  document.body.classList.remove('transparent')
  iframe.setAttribute('src', '')

}

const detectCloseModal = () => {
  closeModalAction.addEventListener('click', closeModal)
  document.addEventListener('keydown', ({ key }) => key === "Escape" && closeModal());
}

renderSkillsSection();
renderProjects(highlightsProjectsContainer, hightLightProjects);
renderProjects(allProjectsContainer, allProjects);
const projectsBox = document.querySelectorAll('.box');
detectCloseModal();
insertProjectAction();
