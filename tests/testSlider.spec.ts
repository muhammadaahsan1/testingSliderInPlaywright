import { test, expect } from '@playwright/test';

test('test Slider ', async ({ page }) => {
  await page.goto('https://www.globalsqa.com/demo-site/sliders/');
 

   const frame =page.frameLocator('[data-src="../../demoSite/practice/slider/colorpicker.html"]')

    const bar = frame.locator('[id="green"] div') 
    const pointer = frame.locator('[id="green"] span')

// test slider with setAttributes (uncomment to run it)

  //   await bar.evaluate( node => {
  //   node.setAttribute('style', 'width: 90%;')
    
  //   })

  //   await pointer.evaluate(node=>{
  //     node.setAttribute('style', 'left: 90%;')
  //   })
  //   await pointer.click()

//test slider with mouse Mouse movement


    await pointer.scrollIntoViewIfNeeded() //its important that the thing to be slide/moved is in view
    const colorBoundBox = await pointer.boundingBox()
    const x = colorBoundBox.x + colorBoundBox.width / 2
    const y = colorBoundBox.y + colorBoundBox.height / 2 
    await page.mouse.move(x, y) //center
    await page.mouse.down()
    await page.mouse.move(x +70, y) //moving from center to 70 points towards x-axis i.e. to the right
    await page.mouse.up()
  
});