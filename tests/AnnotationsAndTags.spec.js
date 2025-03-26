import test, {page, expect} from '@playwright/test'

//Annotations

test.skip('skip this test', async ({ page }) => {
    // This test will be skipped
  });

  test('not yet ready', async ({ page }) => {
    test.fail();
  });

  test.fixme('test to be fixed', async ({ page }) => {
});

test('slow test', async ({ page }) => {
    test.slow();
  });

  test.only('focus this test', async ({ page }) => {
    // Run only focused tests in the entire project
  });

  //Tags

  test('Test full report @smoke', async ({ page }) => {
    // ...
  });
