(this["webpackJsonpautomation-roadmap"]=this["webpackJsonpautomation-roadmap"]||[]).push([[0],{149:function(e,t,a){"use strict";a.r(t);var o=a(0),i=a(40),s=a.n(i),n=a(117),r=a(169),l=a(170),u=a(58),c=a(81),d=a(167),p=a(165),h=a(166),m=a(163),g=(a(130),a(96)),b=a(171),w=a(164),y=a(112),f=a.n(y),v=a(113),j=a(4),L=new f.a.Converter,T=function(e){var t=e.data,a=e.ngOnly;return Object(j.jsxs)("p",{children:[a&&Object(j.jsx)(c.a,{attached:"top",color:"green",children:"Netguru only"}),t.map((function(e){return Object(j.jsxs)("p",{children:[Object(j.jsx)("p",{children:Object(v.a)(L.makeHtml(e.description))}),Object(j.jsxs)(d.a,{animated:!0,size:"medium",href:e.url,target:"_blank",children:[Object(j.jsx)(d.a.Content,{visible:!0,children:e.urlLabel}),Object(j.jsx)(d.a.Content,{hidden:!0,children:Object(j.jsx)(u.a,{name:"arrow right"})})]})]})}))]})},k=function(e){var t,a,o=e.data,i=e.color;return Object(j.jsx)(r.a,{padded:!0,tertiary:!0,inverted:!0,color:i,children:Object(j.jsx)(b.a,{columns:"4",stackable:!0,children:(t=o,a=4,t.reduce((function(e,t,o){var i=Math.floor(o/a);return e[i]||(e[i]=[]),e[i].push(t),e}),[])).map((function(e){return Object(j.jsx)(b.a.Row,{relaxed:!0,children:e.map((function(e){return Object(j.jsx)(b.a.Column,{children:Object(j.jsxs)(r.a,{padded:!0,textAlign:"center",children:[Object(j.jsx)(l.a,{size:"medium",color:"black",children:Object.keys(e)}),Object(j.jsx)("br",{}),Object(j.jsx)(b.a,{relaxed:!0,padded:!0,children:Object.values(e)[0].map((function(e){return Object(j.jsx)(b.a.Row,{children:Object(j.jsx)(w.a,{content:Object(j.jsx)(T,{data:e.data,ngOnly:e.ngOnly}),on:"click",size:"small",pinned:!0,wide:!0,hoverable:!0,trigger:Object(j.jsx)(d.a,{as:"a",compact:!0,fluid:!0,size:"small",color:i,content:e.name,basic:e.optional})})})}))})]})})}))})}))})})},A=function(){var e=Object(o.useState)(!localStorage.getItem("instructionViewedAR")),t=Object(n.a)(e,2),a=t[0],i=t[1],s=function(){localStorage.setItem("instructionViewedAR",!0),i(!a)};return Object(j.jsxs)(r.a,{children:[Object(j.jsxs)(l.a,{as:"h2",icon:!0,textAlign:"center",children:[Object(j.jsx)(u.a,{name:"road"}),"Automation roadmap",Object(j.jsx)("p",{children:Object(j.jsx)(c.a,{children:"From zero to automation hero"})})]}),Object(j.jsxs)(l.a,{as:"h4",textAlign:"center",children:[Object(j.jsx)(d.a,{circular:!0,size:"small",basic:!0,onClick:s,children:"How to use"}),Object(j.jsx)(p.a,{visible:a,animation:"scale",duration:500,children:Object(j.jsxs)(h.a,{dimmer:"blurring",open:a,onClose:s,children:[Object(j.jsx)(h.a.Header,{children:"How to use this roadmap?"}),Object(j.jsxs)(h.a.Content,{children:[Object(j.jsx)("p",{children:"Welcome to automation roadmap where you can plan your development in software test automation related sills. You'll find here useful links and paths which will help you to discover which skill to learn next."}),Object(j.jsxs)("p",{children:["Skills are sorted into three levels:"," ",Object(j.jsx)(c.a,{color:"teal",children:"beginner"}),","," ",Object(j.jsx)(c.a,{color:"blue",children:"intermediate"})," and"," ",Object(j.jsx)(c.a,{color:"purple",children:"expert"}),' (currently under "construction"). Each skill can be expanded by clicking on it: popup with short introduction and links will appear.']}),Object(j.jsxs)("p",{children:["Items without colors filled are"," ",Object(j.jsx)(c.a,{basic:!0,color:"teal",children:"optional"})," ","skills, which are considered nice to have but not mandatory to learn."]}),Object(j.jsxs)("p",{children:["Some of the links are available for"," ",Object(j.jsx)(c.a,{color:"green",children:"Netguru only"})," - it means they are not available to public audience - apply to us if you want to see them! \ud83d\ude05"," "]}),Object(j.jsxs)("p",{children:["Made in ",Object(j.jsx)("a",{href:"https://netguru.com",children:"Netguru"})," with love \u2665\ufe0f"]})]}),Object(j.jsx)(h.a.Actions,{children:Object(j.jsx)(d.a,{positive:!0,onClick:s,children:"Close"})})]})})]}),Object(j.jsx)(m.a,{horizontal:!0,children:"Beginner"}),Object(j.jsx)(k,{data:g.beginner,color:"teal"}),Object(j.jsx)(m.a,{horizontal:!0,children:"Intermediate"}),Object(j.jsx)(k,{data:g.intermediate,color:"blue"}),Object(j.jsx)(m.a,{horizontal:!0,children:"Expert"}),Object(j.jsx)(r.a,{size:"large",color:"purple",inverted:!0,children:"Not available yet, work in progress \ud83d\udc77"})]})};s.a.render(Object(j.jsx)(A,{}),document.getElementById("root"))},96:function(e){e.exports=JSON.parse('{"beginner":[{"Automation concepts":[{"name":"What is test automation?","data":[{"description":"Automated testing is a method in software\u202ftesting that leverages automation tools to control the execution of tests instead of a human tester","url":"https://www.perfecto.io/blog/what-is-test-automation","urlLabel":"What Is Test Automation?"}]},{"name":"Types of automated tests","data":[{"description":"There are many types of automated tests, the most common ones are: \\n* Code Analysis \\n* Unit tests \\n* Integration tests \\n* E2E/Acceptence tests","url":"https://www.testim.io/blog/what-is-test-automation/","urlLabel":"Types of automated tests"}]},{"name":"What are the benefits of automation?","data":[{"description":"Test automation has many benefits, some of them are: \\n * Saves time on regression testing done by QA \\n * Reduces risk of human error that can happen durning regression testing \\n * Speeds up time of getting feedback about state of system under test \\n * It  can be easily implemented into CI/CD","url":"https://www.testim.io/blog/test-automation-benefits/","urlLabel":"Test Automation Benefits"}]},{"name":"When to automate?","data":[{"description":"When should you consider to automate tests? \\n * When there are timeconsuming and repetative tests that have to be executed manually \\n * When the tests will be run often \\n * When the benefit of automation will be higher than costs \\n * When test setup is complex for manual testing","url":"https://www.globalapptesting.com/blog/when-should-you-automate-your-software-testing","urlLabel":"When Should You Automate Your Software Testing?"}]},{"name":"When NOT to automate?","data":[{"description":"When you shouldn\'t consider automating tests? \\n * When the cost of automation will be higher than the benefits \\n * When the test won\'t result with predictable results \\n * When the test will be only run once","url":"https://testguild.com/what-to-automate/","urlLabel":"15 Reasons Why You Should (or shouldn\u2019t) Automate a Test"}]},{"name":"What makes for good automation?","data":[{"description":"What are the characteristic of good automated tests? \\n* Reliability - tests shouldn\'t fail without a reason and should be able to run multiple times \\n* Speed - tests should give quick feedback about state of the system under test \\n* Reporting - tests should return a good report that is easy to understand by everyone (especially important when something fails) \\n* Maintainability - tests should be easy to start, modify and create \\n* Confidence - tests should give confidence that the system works as expected (or doesn\'t if something fails)","url":"https://www.softwaretestinggenius.com/typical-attributes-of-good-automated-test-cases/","urlLabel":"Typical Attributes Of Good Automated Test Cases"},{"description":"","url":"https://automationpanda.com/2020/07/09/12-traits-of-highly-effective-tests/","urlLabel":"Traits of highly effective tests"}]}]},{"Git basics":[{"name":"What is Github/Git? GitBook","data":[{"description":"Official Git book source","url":"https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control","urlLabel":"What is Git? - GitBook"},{"description":"Official Git page","url":"https://git-scm.com/","urlLabel":"What is Git? - Git page"}]},{"name":"Downloading and installing Git","data":[{"description":"How to download and install Git?","url":"https://git-scm.com/download/mac","urlLabel":"Official Git page downloader"},{"description":"Atlassian Git download and install tutorial","url":"https://www.atlassian.com/git/tutorials/install-git?section=git-for-mac-installer","urlLabel":"Atlassian tutorial"}]},{"name":"Git basics","data":[{"description":"Git basics with official GitBook","url":"https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository","urlLabel":"Official Git basics"}]},{"name":"Git branching","data":[{"description":"Learn Git branching is the most visual and interactive way to learn Git on the web","url":"https://learngitbranching.js.org/","urlLabel":"Git branching"}]},{"name":"Friendly tutorial for beginners by Jad Khalili","data":[{"description":"Friendly GIT tutorial for beginners","url":"https://www.udemy.com/course/git-expert-4-hours/?utm_source=adwords&utm_medium=udemyads&utm_campaign=DSA_Catchall_la.EN_cc.ROW&utm_content=deal4584&utm_term=_._ag_88010211481_._ad_535397282064_._kw__._de_c_._dm__._pl__._ti_dsa-406594358574_._li_20861_._pd__._&matchtype=b&gclid=CjwKCAjwtfqKBhBoEiwAZuesiALADywoFSvBlQtfDvUsL_DXv2k-F-8RAAjEMXjM1IZaA9mFD8M2vRoCgHcQAvD_BwE","urlLabel":"Friendly tutorial created by Jad Khalili"}]},{"name":"Commit/pull request","data":[{"description":"Commit - learn what is commit with atlassian","url":"https://www.atlassian.com/git/tutorials/saving-changes/git-commit","urlLabel":"Commit - atlassian"},{"description":"Pull request - learn what is pull request with atlassian","url":"https://www.atlassian.com/git/tutorials/making-a-pull-request","urlLabel":"Pull request - atlassian"}]},{"name":"Git GUI clients","data":[{"description":"What is Git GUI client? dev.to GUI clients ranking","url":"https://dev.to/theme_selection/best-git-gui-clients-for-developers-5023","urlLabel":"Git GUI clients - dev.to"},{"description":"Git GUI clients for Mac. Fossmint ranking.","url":"https://www.fossmint.com/gui-git-clients-for-mac/","urlLabel":"Git GUI clients ranking - fossmint"}]}]},{"IDE, Code Editors & plugins":[{"name":"Visual Studio Code","data":[{"description":"The most popular source-code editor worldwide (as for 2021). Developed by Microsoft","url":"https://code.visualstudio.com/","urlLabel":"Visual Studio Code main page"}]},{"name":"Visual Studio","data":[{"description":"Full-featured IDE to code, debug, test, and deploy to any platform. Developed by Microsoft","url":"https://visualstudio.microsoft.com/","urlLabel":"Visual Studio main page"}]},{"name":"WebStorm","data":[{"description":"WebStorm is an IDE for JavaScript and related technologies, one of many IDE developed by Jetbrains","url":"https://jetbrains.com/webstorm/","urlLabel":"WebStorm main page"}]},{"name":"IntelliJ IDEA","data":[{"description":"IntelliJ is an IDE for Java and related technologies (Kotlin for example), one of many IDE developed by Jetbrains","url":"https://jetbrains.com/idea/","urlLabel":"IntelliJ IDEA main page"}]},{"name":"Atom","optional":true,"data":[{"description":"Source code editor developed by GitHub","url":"https://atom.io/","urlLabel":"Atom main page"}]},{"name":"Sublime Text","optional":true,"data":[{"description":"Sublime Text is a sophisticated text editor for code, markup and prose","url":"https://sublimetext.com/","urlLabel":"Sublime Text main page"}]},{"name":"Eclipse","optional":true,"data":[{"description":"Eclipse primary use is for developing Java applications, but it may also be used to develop applications in other programming languages","url":"https://eclipse.org/downloads/","urlLabel":"Eclipse main page"}]}]},{"HTML, CSS & Locators":[{"name":"HTML","data":[{"description":"\\"HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. \\n \\n For example, content could be structured within a set of paragraphs, a list of bulleted points, or using images and data tables. \\n \\n HTML consists of a series of elements, which you use to enclose, or wrap, different parts of the content to make it appear a certain way, or act a certain way.\\"","url":"https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics","urlLabel":"HTML basics"}]},{"name":"CSS","data":[{"description":"\\"CSS (Cascading Style Sheets) is the code that styles web content. Like HTML, CSS is not a programming language. It\'s not a markup language either. CSS is a style sheet language. CSS is what you use to selectively style HTML elements.\\"","url":"https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics","urlLabel":"CSS basics"}]},{"name":"Locators / Selectors","data":[{"description":"Everything you see on a webpage is an element. Every field, link, image, text and many things you don\u2019t see are all elements. In order to interact with them we first need to find (locate / select) them. \\n \\n For that we use locators (AKA selectors) which are various methods for finding an element on a page. \\n \\n There are many different types of locators. For example: attribute (like ID, class), XPath, CSS selector, text and others. Deciding which one to use depends on a lot of different factors and there is no correct answer other than the one that works for you.","url":"https://www.webperformance.com/load-testing-tools/blog/articles/real-browser-manual/building-a-testcase/how-locate-element-the-page/type-element-locators/","urlLabel":"Types of Element Locators"},{"description":"","url":"https://testautomationu.applitools.com/web-element-locator-strategies/","urlLabel":"Web Element Locator Strategies"}]}]},{"Terminal":[{"name":"Basic terminal commands","data":[{"description":"Here\'s list of basic terminal commands used in everyday work","url":"https://www.techrepublic.com/article/16-terminal-commands-every-user-should-know/","urlLabel":"Terminal tech republic"},{"description":"Netguru wiki - terminal instructions. Here you can find useful commands gathered from Netgurals","url":"https://netguru.atlassian.net/wiki/spaces/QA/pages/270533008/Terminal","urlLabel":"Netguru page for using terminal"},{"description":"Variables","url":"https://linuxize.com/post/how-to-set-and-list-environment-variables-in-linux/","urlLabel":"How to set enviromental and shell variables in bash in an easy way"}]}]},{"Programming":[{"name":"Javascript","data":[{"description":"JavaScript is the world\'s most popular programming language. It started out as purely browser scripting language, after the release of NodeJS which allowed for JS execution outside the browser the language blew up. Today, you can use JavaScript to write all kinds of applications, including browser, server, mobile, and desktop applications.","url":"https://launchschool.com/books/javascript/read/introduction#briefhistory","urlLabel":"A brief Javascript history"},{"description":"In this video course you will go through all the Javascript fundamentals.","url":"https://www.youtube.com/watch?v=2Ji-clqUYnA","urlLabel":"Javascript fundamentals video"},{"description":"This video playlist consists of short videos explaining different Javascript topics that can be very helpful in daily work.","url":"https://www.youtube.com/watch?v=80KX6aD9R7M&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ","urlLabel":"Javascript nuggets playlist"}]},{"name":"TypeScript","data":[{"description":"TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for the development of large applications and transcompiles to JavaScript.","url":"https://medium.com/jspoint/typescript-a-beginners-guide-6956fe8bcf9e","urlLabel":"TypeScript - introduction and history"},{"description":"You will learn how to apply the JavaScript syntax you already know to TypeScript\u2019s type system. This will help you build your own programming experience and give your code more structure. You\u2019ll also use TypeScript\u2019s linter to reduce compilation errors and speed up workflow.","url":"https://www.codecademy.com/learn/learn-typescript","urlLabel":"Learn TypeScript Codecademy course"},{"description":"Use TypeScript and its Features like Types, ES6 Support, Classes, Modules, Interfaces and much more in any of their Projects. Learn why TypeScript offers a real advantage over vanilla JavaScript","url":"https://www.udemy.com/course/understanding-typescript/","urlLabel":"Understanding TypeScript - 2022 Edition"}]},{"name":"Java","data":[{"description":"Java is one of the most popular programming languages used by software developers all over the world. Java was developed in the early 1990s as an object-oriented programming language. Over the years, the language has been the foundation of millions of applications across many platforms such as Windows, Macintosh, UNIX, Android-based handheld devices, Embedded Systems, and corporate solutions.","url":"https://www.jigsawacademy.com/blogs/java/history-of-java/","urlLabel":"History of Java"},{"description":"The material covered here is equivalent to the curriculum of a full semester of Java programming at a university and is designed for complete beginners to programming.","url":"https://testautomationu.applitools.com/java-programming-course/","urlLabel":"Java programming"},{"description":"On this page you will find a set of links to articles that will help you learn Java from scratch. I have divided the articles into sections. Each of them has articles to help you learn more about Java programming. Course is a little-bit non-linear, but I believe everyone\'ll found something for himself in there","url":"https://www.samouczekprogramisty.pl/kurs-programowania-java/","urlLabel":"Samouczek Programisty"}]},{"name":"Python","data":[{"description":"Python is a widely used general-purpose, high-level programming language. It was initially designed in 1991 and developed by Python Software Foundation. It was mainly developed for emphasis on code readability, and its syntax allows programmers to express concepts in fewer lines of code.","url":"https://www.geeksforgeeks.org/history-of-python/","urlLabel":"History of Python"},{"description":"A very good free course on Coursera from Wesleyan University. At the end of each module there is an exercise where the student is required to write simple programs and submit them for grading. Covers only fundamentals.","url":"https://www.coursera.org/learn/python-programming-introduction","urlLabel":"Coursera Python Introduction"},{"description":"Python programming bootcamp from zero to hero on Udemy","url":"https://www.udemy.com/course/complete-python-bootcamp/","urlLabel":"Complete Python bootcamp Udemy course"}]}]}],"intermediate":[{"Design Patterns":[{"name":"Introduction to Design Patterns","data":[{"description":"\\"The Design patterns are defined as the best practices that a programmer must follow to amplify code reusability in a framework. The design pattern explains how to plan the test automation test ware to be useful and easy to maintain. \\n\\n Discard many test automation projects due to the frameworks\' inability to cope with the growing codebases or test suites. Automation engineers should optimize their code to keep the maintenance cost low by using the best design procedures and code coverage of existing functionality for common or repeated operations.\\"","url":"https://www.xenonstack.com/insights/design-patterns","urlLabel":"Introduction to Design Patterns"}]},{"name":"Top Design Patterns","data":[{"description":"\\"Design patterns are like collections of best practices as they provide a concept but not particular implementations. Design patterns help reduce code complexity\u2014as well as make code more extensible, and maintainable. \\n\\n Design patterns are grouped into three categories: \\n\\n * Structural patterns - explain how to assemble objects and classes into larger structures while keeping these structures flexible and efficient. \\n * Creational patterns - provide various object creation mechanisms, which increase flexibility and reuse of existing code. \\n * Behavioral patterns - are concerned with algorithms and the assignment of responsibilities between objects.\\"","url":"https://www.devbridge.com/articles/top-design-pattern-test-automation-frameworks/","urlLabel":"Top Design Patterns"}]},{"name":"Page Object Models (POM)","data":[{"description":"\\"Page Object Model is a design pattern which has become popular in test automation for enhancing test maintenance and reducing code duplication. A page object is an object-oriented class that serves as an interface to a page of your system under test. \\n\\n The tests then use the methods of this page object class whenever they need to interact with the UI of that page, the benefit is that if the UI changes for the page, the tests themselves don\u2019t need to be changed, only the code within the page object needs to change. \\n\\n Subsequently all changes to support that new UI are located in one place.\\"","url":"https://medium.com/tech-tajawal/page-object-model-pom-design-pattern-f9588630800b","urlLabel":"Page Object Models"}]},{"name":"App Actions","data":[{"description":"In App Actions pattern we interact with the actual JS code of the application to prepare its state instead of doing it via interacting with the HTML elements like we usually do during tests. One of main benefits of using App Actions is making tests run faster.","url":"https://www.cypress.io/blog/2019/01/03/stop-using-page-objects-and-start-using-app-actions/","urlLabel":"App Actions in Cypress"}]},{"name":"Screenplay Pattern","data":[{"description":"\\"The Screenplay Pattern is an approach to writing high quality automated acceptance tests based on good software engineering principles such as the Single Responsibility Principle, and the Open-Closed Principle. \\n\\n It favours composition over inheritance, and employs thinking from Domain Driven Design to reflect the domain of performing acceptance tests, steering you towards the effective use of layers of abstraction. \\n\\n It encourages good testing habits and well-designed test suites that are easy to read, easy to maintain and easy to extend, enabling teams to write more robust and more reliable automated tests more effectively.\\"","url":"https://www.infoq.com/articles/Beyond-Page-Objects-Test-Automation-Serenity-Screenplay/","urlLabel":"Screenplay Pattern"}]}]},{"Javascript & Cypress":[{"name":"Introduction to Cypress","data":[{"description":"This course will take through the very basics of Cypress framework, it will explain the history of it, why it is getting so much attention and how to use it.","url":"https://testautomationu.applitools.com/cypress-tutorial/","urlLabel":"Introduction to Cypress course"}]},{"name":"Cypress Master Class","data":[{"description":"This course goes through all important topics regarding Cypress, it starts from basic concepts all up to more advanced ones.","url":"https://www.udemy.com/course/cypress-io-master-class/","urlLabel":"Cypress Master Class Udemy page"}]},{"name":"Cypress Test Automation University Advanced","data":[{"description":"This course will take you through more advanced features of Cypress as well as some tips and tricks.","url":"https://testautomationu.applitools.com/advanced-cypress-tutorial/","urlLabel":"TAU Cypress Advanced Tutorial Website"}]},{"name":"Cypress Tips","data":[{"description":"A useful website created by Gleb Bahmutov that aggregates resources regarding Cypress.","url":"https://cypress.tips/","urlLabel":"Cypress Tips Website"}]},{"name":"Testing Javascript","data":[{"description":"Testing Javascript by Kent C. Dodds is a course that goes through all the levels of testing Javascript - it starts from static and goes all the way up to e2e testing","url":"https://testingjavascript.com/","urlLabel":"Testing Javascript website"}]},{"name":"Working with API response in Cypress","optional":true,"data":[{"description":"Very good blogpost about handling API response data in Cypress - it shows a nice way of getting and storing received data. Useful method for mocking the test data on test environments.","url":"https://filiphric.com/working-with-api-response-data-in-cypress","urlLabel":"Blogpost by Filip Hric"}]},{"name":"Starting with TypeScript in Cypress","optional":true,"data":[{"description":"Learn how to use TypeScript with Cypress and what are the potential benefits","url":"https://filiphric.com/starting-with-typescript-in-cypress","urlLabel":"Starting with TypeScript in Cypress"}]}]},{"Java & Selenium":[{"name":"Selenium WebDriver with Java -Basics to Advanced + Frameworks","data":[{"description":"By the end of this course,You will be Mastered on Selenium Webdriver with strong Core JAVA basics","url":"https://www.udemy.com/course/selenium-real-time-examplesinterview-questions/","urlLabel":"Selenium Java with Rahul Shetty"}]}]},{"Python & Selenium":[{"name":"Python & Selenium (for beginners)","data":[{"description":"This Udemy course focuses on creating tests using Selenium (polish).","url":"https://www.udemy.com/course/kurs-selenium-python/?utm_source=adwords&utm_medium=udemyads&utm_campaign=INTL-AW-PROS-TECH-Poland-DSA-WebIndex&utm_term=_._ag_100563868518_._ad_427601021502_._de_c_._dm__._pl__._ti_dsa-93451758763_._li_9067437_._pd__._&gclid=Cj0KCQjwtrSLBhCLARIsACh6Rmg7AvKZbMx7kTTOIKTV2eXY2xuaL5zVXJVK9RpLuVQ9kDSUAW_NgyYaAvcMEALw_wcB","urlLabel":"Python&Selenium"}]},{"name":"Python & Selenium (for beginners)","data":[{"description":"Online course with teachers. Focuses on simple and more advanced techniques of writing automated tests using Selenium. Includes short introduction to python, lots of practice (polish)","url":"https://fabrykatestow.pl/taps/","urlLabel":"Python&Selenium"}]}]},{"CI Integration":[{"name":"Basic CI knowledge","data":[{"description":"This article describes Continuous Integration. It contains several links to the useful resources.","url":"https://www.atlassian.com/continuous-delivery/tutorials/continuous-integration-tutorial","urlLabel":"Basic knowledge about Continuous Integration"},{"description":"The article presents types of tests and describes how to adopt Continuous Integration","url":"https://www.atlassian.com/continuous-delivery/continuous-integration/how-to-get-to-continuous-integration","urlLabel":"Continuous Integration in 5 steps"},{"description":"This article shows how to optimize test cases for Continuous Integration","url":"https://www.browserstack.com/guide/optimize-tests-for-continuous-integration","urlLabel":"Continuous Integration and tests"}]},{"name":"Continuous Integration tools","data":[{"description":"This article presents the most popular Continuous Integration Tools","url":"https://bitbar.com/blog/top-continuous-integration-tools-for-devops/","urlLabel":"Continuous Integration Tools"}]},{"name":"Continuous Integration with Jenkins","data":[{"description":"This article describes how to use the Jenkins continuous integration build server. It shows installation, setup and configuration.","url":"https://www.vogella.com/tutorials/Jenkins/article.html","urlLabel":"Continuous integration with Jenkins - Tutorial."},{"description":"This course covers commonly used CI tools and does a deep dive into installing and configuring Jenkins. It describes how to create, configure, and execute jobs in Jenkins, including automated test execution","url":"https://testautomationu.applitools.com/jenkins-tutorial/","urlLabel":"Test Automation University"}]},{"name":"Run Cypress on CI - generic CI, GitHub Actions, CircleCI, Netlify","data":[{"description":"Workshop Part 1 - Learn how to run Cypress on a generic CI, on GitHub Actions, on CircleCI, and on Netlify. You need a free acount.","url":"https://commited.tech/events/workshop-running-cypress-on-ci-part-1/","urlLabel":"Gleb Bahmutov - Running Cypress on CI workshop"},{"description":"Workshop Part 2 - Learn how to run Cypress on a generic CI, on GitHub Actions, on CircleCI, and on Netlify. You need a free acount.","url":"https://commited.tech/events/workshop-running-cypress-on-ci-part-2/","urlLabel":"Gleb Bahmutov - Running Cypress on CI workshop"}]},{"name":"Continuous Integration vs. Continuous Delivery","data":[{"description":"This article helps to understand the diffrence between Continuous Integration and Continuous Delivery","url":"https://commited.tech/events/workshop-running-cypress-on-ci-part-1/","urlLabel":"Continuous integration vs. continuous delivery vs. continuous deployment"}]}]},{"BDD":[{"name":"What is BDD and why to use it?","data":[{"description":"The beginner\'s guide to BDD (behaviour-driven development) - term explanation, key benefits and more","url":"https://inviqa.com/blog/bdd-guide","urlLabel":"BDD Guide"}]},{"name":"Writing good Gherkin","data":[{"description":"Good Gherkin feature files are not easy to write at first. Writing is definitely an art. With some basic pointers, and a bit of practice, Gherkin becomes easier. This post will cover how to write top-notch feature files.","url":"https://automationpanda.com/2017/01/30/bdd-101-writing-good-gherkin/","urlLabel":"Writing good Gherkin"}]},{"name":"Gauge - another way to write business specs","optional":true,"data":[{"description":"Gauge is multilanguage framework that allows us to write easy-readable test specs. It has many features (like tags, concepts, data tables) that can speed up documentation process. It also has a nice documentation on their website, provided below. ","url":"https://docs.gauge.org/writing-specifications.html?os=macos&language=javascript&ide=vscode","urlLabel":"Gauge documentation with examples"}]}]},{"Mobile automation":[{"name":"Appium with Rahul Shetty","data":[{"description":"By the end of this course you will be able to automate any (Native,Hybrid,Web) Apps in Android/IOS using Appium","url":"https://www.udemy.com/course/mobile-automation-using-appiumselenium-3/","urlLabel":"Appium"}]},{"name":"NG Mobile QA Academy - Appium setup","ngOnly":true,"data":[{"description":"The tutorial explains how to install Appium and how to setup project in Appium. You will need to ask for permission to access this Netguru internal material.","url":"https://drive.google.com/file/d/1O9MTIFZeTDxJpWsa7j-GAtpO0ROBGcky/view","urlLabel":"Tutorial movie"},{"description":"","url":"https://drive.google.com/file/d/1KPwa9PXl5KLQVQsNSHn-2rq3lZ-07vwA/view?usp=drive_web","urlLabel":"Tutorial presentation"}]},{"name":"NG Mobile QA Academy - First tests in Appium","ngOnly":true,"data":[{"description":"The tutorial explains how to write your first tests in Appium. You will need to ask for permission to access this Netguru internal material.","url":"https://drive.google.com/file/d/1tWmmnu5vh_saqfttr20_EaEHP7BtKrzY/view","urlLabel":"Tutorial movie"},{"description":"","url":"https://drive.google.com/file/d/1w9J6VvoV9Y9cCE9oNbfU1j_-SFUhO6AD/view?usp=drive_web","urlLabel":"Tutorial presentation"}]},{"name":"NG Mobile QA Academy - Page Object Pattern in Appium","ngOnly":true,"data":[{"description":"The tutorial explains how to write tests in Appium using Page Object Pattern. You will need to ask for permission to access this Netguru internal material.","url":"https://drive.google.com/file/d/1aJGlG-IAHbZK0rvxtjWPh2-UggrLnBDz/view","urlLabel":"Tutorial movie"},{"description":"","url":"https://drive.google.com/file/d/1ANOfVF5zo58pLB2fxbRznsPJGgNvOfdz/view?usp=drive_web","urlLabel":"Tutorial presentation"}]},{"name":"NG Mobile QA Academy - Continuous Intergation in Bitrise","ngOnly":true,"data":[{"description":"The tutorial explains how to run your Appium tests using Bitrise, the CI tool for mobile projects. You will need to ask for permission to access this Netguru internal material.","url":"https://drive.google.com/file/d/1sGRHmOZZWzsV9vNqsrwjE-_bZ_ekhLJy/view","urlLabel":"Tutorial movie"},{"description":"","url":"https://drive.google.com/file/d/1nk_-4EndJMHvkfTS3ncID4zHh20ZiGgz/view?usp=drive_web","urlLabel":"Tutorial presentation"}]},{"name":"NG Mobile QA Academy - Appium alternatives","ngOnly":true,"data":[{"description":"The tutorial is about the alternatives to Appium. You will need to ask for permission to access this Netguru internal material.","url":"https://drive.google.com/file/d/1J0MGqkAY41UqJ8JHgpLgcjsX_76qb6Hf/view","urlLabel":"Tutorial movie"},{"description":"","url":"https://drive.google.com/file/d/1Kb1zkV9j2RMOhWlfL1mKtY7wMpljr_sv/view?usp=drive_web","urlLabel":"Tutorial presentation"}]}]},{"API automation":[{"name":"Postman","data":[{"description":"Postman Learning Center is the place where you can find official information on how to use Postman in API projects.","url":"https://learning.postman.com/docs/getting-started/introduction/","urlLabel":"Postman Learning Center"},{"description":"This course will introduce you to Postman and is suited for beginners. You will learn how to build API requests with Postman, how to inspect responses and create workflows","url":"https://www.youtube.com/watch?v=VywxIQ2ZXw4","urlLabel":"Postman for beginners video"}]},{"name":"Insomnia","optional":true,"data":[{"description":"This video presents Insomnia REST Client and how you can use it in your Exploratory API Testing","url":"https://www.youtube.com/watch?v=ErDCN_oU9a8","urlLabel":"Insomnia REST Client in Exploratory API Testing"},{"description":"This video introduces Insomnia API Client","url":"https://www.youtube.com/watch?v=x2AlTaFJJxs","urlLabel":"Insomnia API Client Video Tutorial"},{"description":" This article shows how to set up the Insomnia HTTP client to make requests to the RESTful APIs","url":"https://apis.support.brightcove.com/general/use-insomnia-api-requests.html","urlLabel":"Insomnia API Client Tutorial"}]},{"name":"HTTP library - Python Requests","data":[{"description":"Python Requests documentation with examples. It contains the user guide that focuses on step-by-step instructions how to use Requests.","url":"https://docs.python-requests.org/en/latest/","urlLabel":"Requests documentation"},{"description":"This article present Request library. It shows how to make, customize and configure requests","url":"https://realpython.com/python-requests/","urlLabel":"Requests guide"}]},{"name":"API Test Frameworks - REST Assured","data":[{"description":"This article explores REST-assured and uses Hamcrest to do assertions.","url":"https://www.baeldung.com/rest-assured-tutorial","urlLabel":"REST Assured Introduction"},{"description":"Udemy course that presents core and advanced features of REST Assured. Author - James Willett.","url":"https://www.udemy.com/course/rest-assured-fundamentals/","urlLabel":"REST Assured Udemy Tutorial"},{"description":"Coursera guided project that teaches how to build API test automation framework using Rest Assured.","url":"https://www.coursera.org/projects/building-api-test-automation-framework-using-rest-assured","urlLabel":"REST Assured Coursera Guided Project"}]},{"name":"API Test Frameworks - Karate","optional":true,"data":[{"description":"This course presents Karate framework and its features. For beginners.","url":"https://www.youtube.com/watch?v=1f6xtJpRx4k&list=PLhW3qG5bs-L-y5Q1zDXJAur1JNZVFB534","urlLabel":"Automation Step by Step - Karate Video Tutorial"},{"description":"This artical shows Karate setup and shows variables, simple API requests, and assertions in Karate","url":"https://www.kloia.com/blog/step-1-introduction-to-karate-project-setup-hello-world","urlLabel":"Karate introductory atricle"}]},{"name":"Contract testing","data":[{"description":"This article compares contract testing with other types of tests.","url":"https://alexromanov.github.io/2021/07/12/should-you-use-contract-testing/?","urlLabel":"Contract testing vs. other types of tests"},{"description":"These Pact video tutorials present Pact modules, language, schemas and tables.","url":"https://www.youtube.com/watch?v=BedEHtwLLes&list=PL4G3uLl2K-dlzQkRXeCTbfpbZUVSmRrq7","urlLabel":"Pact video tutorial for beginners"},{"description":"These Pact video tutorials present control flow, interfaces.","url":"https://www.youtube.com/watch?v=fbZpsQAqz48&list=PL4G3uLl2K-dn5-V0MogoBSlCwCUyJQJqZ","urlLabel":"Pact video intermediate tutorial"}]}]}],"expert":[{"Cloud-Based Cross Browser Testing":[{"name":"placeholder","data":[{"description":"description 1","url":"http://google.com","urlLabel":"some urlLabel"}]}]},{"Parallel testing":[{"name":"placeholder","data":[{"description":"* Test podpunkt\xf3w i test **bold** fonta \\n * *pochy\u0142y* font tez jest okej","url":"http://google.com","urlLabel":"some urlLabel"},{"description":"second block","url":"http://google.com","urlLabel":"some Shit here"},{"description":"third block","url":"http://google.com","urlLabel":"some Shit here"}]}]},{"Cypress - advanced":[{"name":"placeholder","data":[{"description":"description 1","url":"http://google.com","urlLabel":"some urlLabel"}]}]},{"Selenium - advanced":[{"name":"placeholder","data":[{"description":"description 1","url":"http://google.com","urlLabel":"some urlLabel"}]}]}]}')}},[[149,1,2]]]);
//# sourceMappingURL=main.87ae5c93.chunk.js.map