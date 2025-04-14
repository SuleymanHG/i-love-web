// server.js
import express from 'express';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { Liquid } from 'liquidjs';

dotenv.config();

const app = express();
app.use(express.json());

app.use(express.static('public'))

const engine = new Liquid();
app.engine('liquid', engine.express());

app.set('views', './views')

// Connect to Supabase
const supabaseUrl = 'https://xztzttwmmalkrfipsylb.supabase.co'
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)



app.get('/learninglog', async (req, res) => {
    const { data, error } = await supabase
      .from('learning_log')
      .select('*')
      .order('date', { ascending: false });
  
    if (error) {
      console.error('❌ Supabase error:', error.message);
      return res.status(500).send('Error loading logs');
    }
  
    res.render('learninglog.liquid', { logs: data }); // 👈 Renders view with data
  });


// Example route to insert a row
app.post('/add-log', async (req, res) => {
  const { date, h1, h2, h3, h4, content, list_items, tags } = req.body;

  const { data, error } = await supabase
    .from('learning_log')
    .insert([{ date, h1, h2, h3, h4, content, list_items, tags }]);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.json({ success: true, data });
});

// Server start
app.set('port', process.env.PORT || 8000)

app.listen(app.get('port'), function () {
  console.log(`Application started on http://localhost:${app.get('port')}`)
})
