import { test, expect } from '@playwright/test';

test('test Slider ', async ({ page }) => {
  await page.goto('https://www.globalsqa.com/demo-site/sliders/');
 

   const frame =page.frameLocator('[data-src="../../demoSite/practice/slider/colorpicker.html"]')

    const bar = frame.locator('[id="green"] div') 
    const pointer = frame.locator('[id="green"] span')

    await bar.evaluate( node => {
    node.setAttribute('style', 'width: 90%;')
    
    })

    await pointer.evaluate(node=>{
      node.setAttribute('style', 'left: 90%;')
    })
    await pointer.click()

    //test slider with mouse

    //Mouse movement
    const tempBox = page.locator('[tabtitle="Temperature"] ngx-temperature-dragger') 
    await tempBox.scrollIntoViewIfNeeded()
    const box = await tempBox.boundingBox()
    const x = box.x + box.width / 2
    const y = box.y + box.height / 2 
    await page.mouse.move(x, y) 
    await page.mouse.down()
    await page.mouse.move(x +100, y)
    await page.mouse.move(x+100, x+100) 
    await page.mouse.up()
    
  
});

