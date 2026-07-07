// อ้างอิง Element จาก HTML
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// ฟังก์ชันสำหรับเพิ่มรายการ
function addTodo() {
    const todoText = todoInput.value.trim();

    // ถ้าไม่ได้พิมพ์อะไรมา ไม่ให้เพิ่ม
    if (todoText === "") {
        alert("กรุณากรอกข้อความก่อนครับ 🙏");
        return;
    }

    // สร้าง Element ของรายการใหม่ (li)
    const li = document.createElement('li');
    
    // ใส่ข้อความลงไป
    const textSpan = document.createElement('span');
    textSpan.innerText = todoText;
    li.appendChild(textSpan);

    // สร้างปุ่มลบ
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'ลบ';
    deleteBtn.className = 'delete-btn';
    
    // ตั้งค่าให้เมื่อกดปุ่มลบ แล้วลบตัวมันเองออก
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(deleteBtn);

    // นำรายการใหม่ไปใส่ใน list หลัก
    todoList.appendChild(li);

    // ล้างช่องกรอกข้อความหลังจากเพิ่มเสร็จ
    todoInput.value = "";
    todoInput.focus();
}

// กดปุ่มเพิ่มเมื่อคลิกเมาส์
addBtn.addEventListener('click', addTodo);

// กด Enter ที่แป้นพิมพ์เพื่อเพิ่มได้ด้วย
todoInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});