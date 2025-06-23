import { test, expect } from '@playwright/test';

import { productNav } from '../Testcases/verifyThatShowValidRelatedProducts.mjs';
import { productNav2 } from '../Testcases/verifyThatMatchBasedOnTwoWordsInTitle.mjs';
import { productNav3 } from '../Testcases/verifyThatExcludeBasedOnUnmatchedCategory.mjs';

test.describe('verifyThatShowValidRelatedProducts', () => productNav());
test.describe('verifyThatMatchBasedOnTwoWordsInTitle', () => productNav2());
test.describe('verifyThatExcludeBasedOnUnmatchedCategory.mjs', () => productNav3());