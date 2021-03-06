const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">

  <div class="form-group">
    <label for="authorName" class="col-sm-2 control-label">Author Name</label>
    <div class="col-sm-10">
      <input id="authorName" name="authorName" placeholder = "Author Name" type="text" class="form-control"/>
    </div>
  </div>

    <div class="form-group">
      <label for="authorEmail" class="col-sm-2 control-label">Author Email</label>
      <div class="col-sm-10">
        <input id="authorEmail" name="authorEmail" placeholder = "Author Email" type="text" class="form-control"/>
      </div>
    </div>

    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>

    <div class="form-group">
      <label for="pageContent" class="col-sm-2 control-label">Page Content</label>
      <div class="col-sm-10">
        <input id="pageContent" name="pageContent" placeholder = "Page Content" type="text" class="form-control"/>
      </div>
    </div>

    <div class="form-group">
      <label for="pageStatus" class="col-sm-2 control-label">Page Status</label>
      <div class="col-sm-10">
        <input id="pageStatus" name="pageStatus" placeholder = "Page Status" type="text" class="form-control"/>
      </div>
    </div>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>

  </form>
`);
