function doGet() {
  
  var html = HtmlService.createTemplateFromFile('output_weekly_report');

  var htmlOutput = html.evaluate();
  htmlOutput
    .setTitle('[SEP][二課１G] 21ポータル')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
  
  return htmlOutput;
}

