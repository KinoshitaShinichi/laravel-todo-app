 // タグの編集用フォーム
 const editTagForm = document.forms.editTagForm;

 // タグの削除用フォーム
 const deleteTagForm = document.forms.deleteTagForm;

 // 削除の確認メッセージ
 const deleteMessage = document.getElementById('deleteTagModalLabel');

 // タグの編集用モーダルを開くときの処理
 //Bootstrapで実装したモーダルでは、「モーダルを開くとき」というイベント処理を'show.bs.modal'で指定します。また、relatedTargetプロパティを使えばイベントに関連する別の要素（今回の場合は「モーダルを開くときにクリックされたボタン」）を取得できます。
 document.getElementById('editTagModal').addEventListener('show.bs.modal', (event) => {
   let tagButton = event.relatedTarget; //モーダルを開くときにクリックされた編集ボタンを取得する
   let tagId = tagButton.dataset.tagId; //その編集ボタンに設定されているdata-tag-id属性とdata-tag-name属性の値を取得する
   let tagName = tagButton.dataset.tagName;

   editTagForm.action = `tags/${tagId}`; //編集用モーダル内にあるformタグのaction属性に、送信先のURL（tags/取得したdata-tag-id属性の値）を代入する
   editTagForm.name.value = tagName; //編集用モーダル内にあるinputタグのvalue属性に、取得したdata-tag-name属性の値を代入する
 });

 // タグの削除用モーダルを開くときの処理
 document.getElementById('deleteTagModal').addEventListener('show.bs.modal', (event) => {
   let deleteButton = event.relatedTarget;
   let tagId = deleteButton.dataset.tagId;
   let tagName = deleteButton.dataset.tagName;

   deleteTagForm.action = `tags/${tagId}`;
   
   //削除用モーダル内にあるh5要素のテキストに、「『取得したdata-tag-name属性の値』を削除してもよろしいですか？」というメッセージを代入する
   deleteMessage.textContent = `「${tagName}」を削除してもよろしいですか？`

 });
