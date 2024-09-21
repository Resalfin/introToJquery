import $ from "jquery";
import "./style.css";
import cek_khodam from "./cek_khodam";

$("#app").html(`
    
    <div class="container">
      <h1 class="judul">Hello Brohh</h1>

      <label for="nameInput" id="label_input">Masukkan nama Anda:<br></label>
      
      <input type="text" id="nameInput" placeholder="Nama Anda">
      
      <div class="card">
      <button id="btn">click</button>
      </div>
    </div>
    
    
    `);
cek_khodam($("#btn"));
