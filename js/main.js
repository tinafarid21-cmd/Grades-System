class Student {
    constructor(name, sub1, sub2, sub3, attendance) {
        if (!name || name.trim() === "") {
            throw new Error("يرجى إدخال اسم الطالب!");
        }
        this.name = name.trim();
        this.sub1 = Number(sub1);
        this.sub2 = Number(sub2);
        this.sub3 = Number(sub3);
        this.attendance = Number(attendance);
    }

    getAverage() {
        return (this.sub1 + this.sub2 + this.sub3) / 3;
    }
}

const studentsList = [];

const nameInput = document.getElementById("studentName");
const sub1Input = document.getElementById("sub1");
const sub2Input = document.getElementById("sub2");
const sub3Input = document.getElementById("sub3");
const attendanceInput = document.getElementById("attendance");
const addBtn = document.getElementById("addBtn");
const studentsListBox = document.getElementById("studentsListBox");
const errorBox = document.getElementById("errorBox");

addBtn.onclick = function () {
    errorBox.classList.add("d-none");
    errorBox.textContent = "";

    try {
        const student = new Student(
            nameInput.value,
            sub1Input.value,
            sub2Input.value,
            sub3Input.value,
            attendanceInput.value
        );

        studentsList.push(student);
        renderList();

        nameInput.value = "";
        sub1Input.value = "";
        sub2Input.value = "";
        sub3Input.value = "";
        attendanceInput.value = "";

    } catch (error) {
        errorBox.textContent = error.message;
        errorBox.classList.remove("d-none");
    }
};

function renderList() {
    studentsListBox.innerHTML = "";
    studentsList.forEach((st, index) => {
        const avg = st.getAverage().toFixed(2);
        studentsListBox.innerHTML += `
            <div class="border-bottom py-2 d-flex justify-content-between align-items-center">
                <span><strong>${index + 1}. ${st.name}</strong> (حضور: ${st.attendance}%)</span>
                <span class="badge bg-secondary">المتوسط: ${avg}</span>
            </div>
        `;
    });
}