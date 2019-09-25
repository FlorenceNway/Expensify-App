##To Run the app
live-server public

##To babel complile JXS codes and save the codes from src/app.js to public/scripts/app.js
babel src/app.js --out-file=public/scripts/app.js --presets=env,react 

##To keep watch on
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch