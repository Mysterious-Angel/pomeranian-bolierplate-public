import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';

import { Cwiczenie1MetaData } from './Cwiczenie1/router-data';

import { Cwiczenie2MetaData } from './Cwiczenie2/router-data';
import { IfStatementsMetaData } from './IfStatements/router-data';
import { IfStatementsMoreOrLessMetaData } from './IfStatementsMoreOrLess/router-data';
import { MakietaPiecMetaData } from './MakietaPiec/router-data';
import { formsUseRefMetaData } from './Forms/router-data';
import { basicFormsMetaData } from './BasicForms/router-data';
// import { reactUseRefMetaData } from './ReactUseRef/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  Cwiczenie1MetaData,
  Cwiczenie2MetaData,
  IfStatementsMetaData,
  IfStatementsMoreOrLessMetaData,
  MakietaPiecMetaData,
  formsUseRefMetaData,
  basicFormsMetaData,
  // reactUseRefMetaData,
];

export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
