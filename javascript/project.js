// work with the arrows to change the project info
// local reviews data
const reviews = [
    {
      id: 1,
      name: 'Athena app',
      job: 'Swift, Firestore, Git',
      img: 'images/Athena.png',
      git: 'https://github.com/lkim3834/Athena',
      text: [
        'Created an iOS book-tracking app by implementing Swift, Firebase Firestore, and MVVM architecture in an Agile.',
        'Retrieved and updated backend data utilizing Firestore to enhance users’ reading progress monitoring experience.',
        'Served a user-friendly notes view, allowing users to create, search, and manage notes linked to their books.'
      ]
    },
    {
      id: 2,
      name: 'MeetupOrganizer',
      job: 'SQL, JavaScript, HTML/CSS, Git, Python, Docker',
      img: 'images/meetup_logo.png',
      git: 'https://github.com/lkim3834/Meetup-Organizer-Website/tree/main',
      text: [
        'Developed a full-stack MeetupOrganizer website, utilizing Rest API with .NET 7, C#, JavaScript, and HTML/CSS.',
        'Handled HTTP requests, including GET, PUT, and POST, and performed the required data operations with C#.',
        'Deployed it on the Microsoft Azure cloud platform using an Azure SQL database and Docker, providing scalability.'
      ]
    },
    {
      id: 3,
      name: 'CPU Scheduling Algorithms',
      job: 'C, Linux, I/O, Git',
      img: '',
      git: 'https://github.com/lkim3834/CPU-scheduling-algorithms',
      text: [
        'Implemented a selection of CPU scheduling algorithms, including First-Come, First-Served (FCFS) and SJN.',
        'Tested algorithms against simulated thread groups with random arrival times and bursts of CPU and I/O activity.',
        'Optimized turnaround and waiting times for 150 thread profiles, showcasing performance optimization skills.'
      ]
    },
    {
      id: 4,
      name: 'Client/Server Application Using Sockets',
      job: 'C++, Linux, IP, Git',
      img: '',
      git: 'https://github.com/lkim3834/object-oriented-techniques_using_Cpp/tree/main/asg4-client-server/code',
      text: [
        'Established client-server communication in C++ by building 11 cxi_commands (such as GET, PUT, RM, etc.).',
        'Implemented a header containing payload size, a single byte representing a client command, and the filename.',
        'Enabled file transfers, requests, and summary listings via TCP/IP over IPv4 sockets.'
      ]
    },
    {
      id: 5,
      name: 'Data Mining on a Fish Dataset',
      job: 'Python, Pandas, Numpy',
      img: 'images/data_mining.png',
      git: 'https://colab.research.google.com/drive/10Rmqu31HVwzEh3TLVJgJzRrkJI_U3BEs#scrollTo=OrI7XG0qP0aW',
      text: [
        'Employed different variations of linear regression to predict fish weight based on species type, weight, etc.',
        'Created a Pandas dataframe and employed Pandas functionality and sklearn to split the data into test and training datasets.',
        'Identified outliers using mean and standard deviation from Numpy and dropped them from the dataset using a 4 standard deviations cut-off.'
      ]
    },
    {
      id: 6,
      name: 'Dynamic_survey',
      job: 'Angular, Typescript, HTML, SCSS, GitHub, Firebase',
      img: 'images/Dynamic_survey.png',
      git: 'https://github.com/lkim3834/survey',
      text: [
        'A data collection platform that provides qualitative and quantitative data through clusters built on responses to open-ended questions.',
        'Included UI components such as layout, icons, and popovers, leveraging HTML/CSS, Typescript, and Figma.',
        'Interacted with Firebase efficiently, retrieving and modifying nine entities, to enable users to create and edit surveys.'
      ]
    }
  ];
  
  // select items
  const img = document.getElementById('images');
  const author = document.getElementById('author');
  const job = document.getElementById('job');
  const info = document.getElementById('info');
  
  const git = document.getElementById('github')
  const imageGit = document.querySelector('.reviewGit')
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const link =  document.querySelector('.link');
  // set starting item
  let currentItem = 0;
  
  // load initial item
  // whenever window is loaded, this function will be called
  // DOM stands for Document Object Model
  // addEventListener:  sets up a function that will be called whenever the specified event is delivered to the target.
  window.addEventListener('DOMContentLoaded', function () {
    console.log("d")
    showPerson(currentItem);
  });
  
  // show person based on item
  // person is the index of the reviews array
  function showPerson(person) {
    const item = reviews[person];
    console.log(item.text);
    img.src = item.img;
    author.textContent = item.name;
    
    job.textContent = item.job;
    info.textContent = "";
    
    
    item.text.forEach(function (obj) {
        // console.log("object is " + obj);
        var element = document.createElement('div');
        element.innerHTML = obj; 
        info.appendChild(element);
       
          
      
      });
      //  if github link exists , add it. else remove 
    
      if(item.git){
        git.style.display = "block";
        console.log(imageGit.href);
        imageGit.href = item.git; 
        console.log(imageGit.href);
        console.log(imageGit);
        link.href = item.git; 
  
      }else{
        git.style.display = "none";
        
        
      }
  }
  // show next person
  nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    console.log(currentItem);
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  
  
  

  