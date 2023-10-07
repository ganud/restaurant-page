import './style.css';
import { clearContent } from './page-loader';
import createHome from "./tabSwitchHome.js";
import createMenu from "./tabSwitchMenu.js"
import createContacts from "./tabSwitchContacts.js"
// Buttons of note
document.getElementById('home').addEventListener('click', createHome)
document.getElementById('menu').addEventListener('click', createMenu)
document.getElementById('contacts').addEventListener('click', createContacts)
