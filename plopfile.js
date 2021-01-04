module.exports = function (plop) {
  plop.setGenerator('parent-component', {
    description: 'Create a parent component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'controller {{ name }} please',
      },
      {
        type: 'input',
        name: 'componentProps',
        message: 'controller {{ componentProps }} please',
      },
      {
        type: 'list',
        name: 'componentPropsTypes',
        message: 'controller {{ componentPropsTypes }} please',
        choices: ['any', 'string', 'number', '[]', '{}', '() => void'],
      },
      {
        type: 'input',
        name: 'componentProps',
        message: 'controller {{ componentProps }} please',
      },
      {
        type: 'input',
        name: 'containerProps',
        message: 'controller {{ containerProps }} please',
      },
      {
        type: 'list',
        name: 'containerPropsTypes',
        message: 'controller {{ containerPropsTypes }} please',
        choices: ['any', 'string', 'number', '[]', '{}', '() => void'],
      },
      {
        type: 'confirm',
        name: 'wantUtils',
        message: 'Do you want utils file beside a container?',
      },
    ],
    actions: (data) => {
      let actions = [
        {
          type: 'add',
          path: 'src/components/{{dashCase name}}/index.tsx',
          templateFile: 'plop-templates/parent-templates/component.tsx.hbs',
        },
        {
          type: 'add',
          path: 'src/containers/{{dashCase name}}/index.tsx',
          templateFile: 'plop-templates/parent-templates/container.ts.hbs',
        },
        {
          type: 'add',
          path: 'src/core/typings/{{dashCase name}}/index.d.ts',
          templateFile: 'plop-templates/parent-templates/namespace.d.ts.hbs',
        },
        {
          type: 'add',
          path: 'src/components/{{dashCase name}}/{{name}}.cm.test.tsx',
          templateFile: 'plop-templates/test-templates/component.test.tsx.hbs',
        },
        {
          type: 'add',
          path: 'src/containers/{{dashCase name}}/{{name}}.cn.test.tsx',
          templateFile: 'plop-templates/test-templates/container.test.tsx.hbs',
        },
        {
          type: 'append',
          path: 'src/core/typings/index.ts',
          pattern: /(\/\/ INCLUDE EXPORT NAMESPACE)/g,
          templateFile: 'plop-templates/parent-templates/include-export-namespace.ts.hbs',
        },
      ];

      if (data.childrenComponent) {
        actions = actions.concat([
          {
            type: 'add',
            path: 'src/components/{{dashCase children}}/index.tsx',
            templateFile: 'plop-templates/test-templates/container.test.tsx.hbs',
          },
        ]);
      }

      if (data.wantUtils) {
        actions = actions.concat([
          {
            type: 'add',
            path: 'src/containers/{{dashCase name}}/utils.ts',
            templateFile: 'plop-templates/parent-templates/utils.ts.hbs',
          },
        ]);
      }

      return actions;
    },
  });

  plop.setGenerator('children-component', {
    prompts: [
      {
        type: 'input',
        name: 'children',
        message: 'What is your children component name?',
      },
      {
        type: 'input',
        name: 'pathName',
        message: 'Please write a pathanme',
      },
      {
        type: 'input',
        name: 'name',
        message: 'Write a namespace {{ name }} which you want to used',
      },
      {
        type: 'input',
        name: 'childrenComponentProps',
        message: 'children component {{ childrenComponentProps }} please',
      },

      {
        type: 'list',
        name: 'childrenComponentPropsTypes',
        message: 'controller {{ childrenComponentPropsTypes }} please',
        choices: ['any', 'string', 'number', '[]', '{}', '() => void'],
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pathName}}/{{dashCase children}}/index.tsx',
        templateFile: 'plop-templates/children-templates/component.tsx.hbs',
      },
      {
        type: 'append',
        path: 'src/core/typings/{{lowerCase name}}/index.d.ts',
        pattern: /(\/\/ PUT CHILDREN INTERFACE)/g,
        templateFile: 'plop-templates/children-templates/update-namespace.d.ts.hbs',
      },
    ],
  });

  plop.setGenerator('styled-component', {
    prompts: [
      {
        type: 'input',
        name: 'pathName',
        message: 'Please write a pathanme',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pathName}}/styles.ts',
        templateFile: 'plop-templates/styled-components-templates/styles.ts.hbs',
      },
    ],
  });

  plop.setGenerator('create test file', {
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Write a file name {{ name }} which you want to used',
      },
      {
        type: 'input',
        name: 'pathName',
        message: 'Please write a pathanme',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{pathName}}/{{lowerCase name}}.test.ts',
        templateFile: 'plop-templates/test-templates/test.ts.hbs',
      },
    ],
  });
};
