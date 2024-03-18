import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }) {
  const modalRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      //유효성 검사 모달
      modalRef.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }
  return (
    <>
      <Modal ref={modalRef} buttonCaption="확인">
        <h2 className="text-xl font-bold text-stone-700 my-4">⚠️경고</h2>
        <p className="text-stone-500 mb-4">유효하지 않은 값이 존재합니다.</p>
        <p className="text-stone-500 mb-4">
          모든 값이 입력되어 있는지 확인해주세요!
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              취소
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              저장
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={titleRef} label="제목" />
          <Input ref={descriptionRef} label="설명" textarea />
          <Input type="date" ref={dueDateRef} label="날짜" />
        </div>
      </div>
    </>
  );
}
