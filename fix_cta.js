const fs = require('fs');

let cta = fs.readFileSync('src/components/CTASection.tsx', 'utf8');

cta = cta.replace('Got an idea that', 'Got an itch you');
cta = cta.replace('won\'t let you sleep?', 'need to scratch?');
cta = cta.replace('We partner with founders, teams, and dreamers to build products that matter.\\n            Let\\'s turn your obsession into something real.', 'We partner with technical founders, creative teams, and dreamers to build products that actually matter. Stop sleeping on that idea in your notes app. Let\\'s push to production.');
cta = cta.replace('Start a conversation', 'Initialize Project');
cta = cta.replace('Book a call', 'Read the Docs (or Email Us)');

fs.writeFileSync('src/components/CTASection.tsx', cta);

let tf = fs.readFileSync('src/components/TeamFooter.tsx', 'utf8');
tf = tf.replace('Â©', '©');
tf = tf.replace('â€¢', '•');
tf = tf.replace('Made with obsession', 'Compiling...');
fs.writeFileSync('src/components/TeamFooter.tsx', tf);
