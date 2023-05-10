function CommentInput({ comment, onChange }) {
  return (
    <label>
      Введите комментарий:
      <textarea value={comment} onChange={onChange} />
    </label>
  );
}

export default CommentInput;
