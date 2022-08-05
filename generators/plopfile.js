module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/component/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/stories.tsx',
        templateFile: 'templates/component/stories.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/test.tsx',
        templateFile: 'templates/component/test.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/style.tsx',
        templateFile: 'templates/style.tsx.hbs',
      },
    ],
  });

  plop.setGenerator('page', {
    description: 'Create a page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your page name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/pages/{{lowerCase name}}/index.tsx',
        templateFile: 'templates/page/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/pages/{{lowerCase name}}/test.tsx',
        templateFile: 'templates/page/test.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/pages/{{lowerCase name}}/style.tsx',
        templateFile: 'templates/style.tsx.hbs',
      },
    ],
  });
};
