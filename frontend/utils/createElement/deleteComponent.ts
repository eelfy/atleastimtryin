import * as fs from 'fs';
import {dir} from './createElement'

const deleteComponent = () => {
 fs.rmSync(dir,{recursive:true, force:true});
}

deleteComponent();