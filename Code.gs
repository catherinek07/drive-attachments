var folderName = '[xyz]';
function saveAttachments() {
  //change with the folder ID
  var folder = DriveApp.getFolderById('1NPgZ-zp9ngh8dQcouBYiSR4j6xUu0TDD');
  const emails = GmailApp.search('in:inbox subject:[xyz] has:attachment label:unread');
  for (var i in emails) {
    var msgs = emails[i].getMessages();
    for (var j in msgs) {
      var attachments = msgs[j].getAttachments();
      for (var k in attachments) {
        var attachment = attachments[k];
        var attachmentBlob = attachment.copyBlob();
        folder.createFile(attachmentBlob);
      }
      msgs[j].markRead();
    }
  }
}
