import * as fs from 'fs';
import { env } from 'process'

interface ElementStructure {
  type: string;
  name: string;
}

const Element: ElementStructure = {
  type : env.ELEMENT_TYPE,
  name: env.ELEMENT_NAME, 
}

const dir = `../../src/${Element.type}s/${Element.name}`;

createElement();

function createElement() {
  createElementDir()
  createElementStructure()
}

function createElementDir(){
  if(!fs.existsSync(dir)){
    fs.mkdirSync(dir)
  }
}

function createElementStructure(){
  writeBehavior();
  writeStyled();
  writeTemplate();
  writeTypes();
  writeIndex();
}

function writeBehavior(){
  fs.writeFile(`${dir}/${Element.name}Behavior.tsx`, `
    import { FC } from 'react';
    import { ${Element.name}BehaviorProps } from './${Element.name}Types';
    import ${Element.name}Template from './${Element.name}Template';
    
    const ${Element.name}Behavior: FC<${Element.name}BehaviorProps> = ({
    
    }) => {
      return (
        <${Element.name}Template />
      );
    };
    
    export default ${Element.name}Behavior;
  `, (err) => {
    if(err) throw err;
  });
}
function writeStyled(){
  fs.writeFile(`${dir}/${Element.name}Styled.tsx`, `
    import styled from 'styled-components';

    export {};
  `, (err) => {
    if(err) throw err;
  });
}
function writeTemplate(){
  fs.writeFile(`${dir}/${Element.name}Template.tsx`, `
    import { FC } from 'react';
    import { ${Element.name}TemplateProps } from './${Element.name}Types';
    
    const ${Element.name}Template: FC<${Element.name}TemplateProps> = ({
    
    }) => {
      return (
        <></>
      );
    };
    
    export default ${Element.name}Template;
  `, (err) => {
    if(err) throw err;
  });
}
function writeTypes(){    
  fs.writeFile(`${dir}/${Element.name}Types.ts`, `
    interface ${Element.name}Props {}
    interface ${Element.name}TemplateProps extends ${Element.name}Props {}
    interface ${Element.name}BehaviorProps extends ${Element.name}Props {}
    
    export type {${Element.name}TemplateProps,${Element.name}BehaviorProps}
  `, (err) => {
    if(err) throw err;
  });
}
function writeIndex(){
  fs.writeFile(`${dir}/index.ts`, `
    import ${Element.name} from './${Element.name}Behavior';

    export default ${Element.name};
  `, (err) => {
    if(err) throw err;
  });
}


export { dir };