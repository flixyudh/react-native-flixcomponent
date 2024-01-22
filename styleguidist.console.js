"use strict";
const kleur = require("kleur");
const webpackDevServerUtils = require("react-dev-utils/WebpackDevServerUtils");

const printServerInstructions = (config) => {
  const urls = webpackDevServerUtils.prepareUrls(
    "http",
    config.serverHost,
    config.serverPort
  );
  console.log(`${kleur
    .cyan()
    .bold(
      "\r\n     _,---.             .=-.-.         ,-.--,          _,.----.     _,.---._           ___      _ __      _,.---._    .-._           ,----.  .-._        ,--.--------.  \r\n  .-`.' ,  \\   _.-.    /==/_ /.--.-.  /=/, .'        .' .' -   \\  ,-.' , -  `.  .-._ .'=.'\\  .-`.' ,`.  ,-.' , -  `. /==/ \\  .-._ ,-.--` , \\/==/ \\  .-._/==/,  -   , -\\ \r\n /==/_  _.-' .-,.'|   |==|, | \\==\\ -\\/=/- /         /==/  ,  ,-' /==/_,  ,  - \\/==/ \\|==|  |/==/, -   \\/==/_,  ,  - \\|==|, \\/ /, /==|-  _.-`|==|, \\/ /, |==\\.-.  - ,-./ \r\n/==/-  '..-.|==|, |   |==|  |  \\==\\ `-' ,/          |==|-   |  .|==|   .=.     |==|,|  / - |==| _ .=. |==|   .=.     |==|-  \\|  ||==|   `.-.|==|-  \\|  | `--`\\==\\- \\    \r\n|==|_ ,    /|==|- |   |==|- |   |==|,  - |          |==|_   `-' \\==|_ : ;=:  - |==|  \\/  , |==| , '=',|==|_ : ;=:  - |==| ,  | -/==/_ ,    /|==| ,  | -|      \\==\\_ \\   \r\n|==|   .--' |==|, |   |==| ,|  /==/   ,   \\         |==|   _  , |==| , '='     |==|- ,   _ |==|-  '..'|==| , '='     |==| -   _ |==|    .-' |==| -   _ |      |==|- |   \r\n|==|-  |    |==|- `-._|==|- | /==/, .--, - \\        \\==\\.       /\\==\\ -    ,_ /|==| _ /\\   |==|,  |    \\==\\ -    ,_ /|==|  /\\ , |==|_  ,`-._|==|  /\\ , |      |==|, |   \r\n/==/   \\    /==/ - , ,/==/. / \\==\\- \\/=/ , /         `-.`.___.-'  '.='. -   .' /==/  / / , /==/ - |     '.='. -   .' /==/, | |- /==/ ,     //==/, | |- |      /==/ -/   \r\n`--`---'    `--`-----'`--`-`   `--`-'  `--`                         `--`--''   `--`./  `--``--`---'       `--`--''   `--`./  `--`--`-----`` `--`./  `--`      `--`--`   \r\n"
    )}

${require("child_process").execSync("open " + urls.localUrlForBrowser)}
${kleur.bold().underline("Local:")} ${urls.localUrlForTerminal}`);

  if (urls.lanUrlForTerminal) {
    console.log(`${kleur.bold("On your network:")} ${urls.lanUrlForTerminal}`);
  }
};

module.exports = { printServerInstructions };
