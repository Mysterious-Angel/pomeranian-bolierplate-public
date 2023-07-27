import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { JsStringTrainingMetaData } from './JsStringTraining/router-data';
import { ArraysAndObjectsMetaData } from './ArraysAndObjects/router-data';
import { JsArrayMethodsExerciseMetaData } from './JsArrayMethodsExercise/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  JsStringTrainingMetaData,
  ArraysAndObjectsMetaData,
  JsArrayMethodsExerciseMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
