import React from 'react';


const Modal = ({handleClose, show, children}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
      <fieldset>
      <label htmlFor="bugName">Bug Number:</label>
      <input type="text" id="bugName" name="bugName" />

      <label htmlFor="bugDescription">Description:</label>
      <input type="text" id="bugDescription" name="bugDescription" />

      <label htmlFor="reportedBy">Reported By:</label>
      <select type="text" id="reportedBy" name="reportedBy">
        <option value="Ethan" id="Ethan">Ethan</option>
        <option value="Zach" id="Zach">Zach</option>
        <option value="Aaron" id="Aaron">Aaron</option>
        <option value="Matt" id="Matt">Matt</option>
      </select>

      <label htmlFor="createdDate">Created Date:</label>
      <input type="text" id="createdDate" name="createdDate" />

      <label htmlFor="assignedTo">Assigned To:</label>
      <select type="text" id="assignedTo" name="assignedTo">
        <option value="Savi" id="Savi">Savi</option>
        <option value="Bailey" id="Bailey">Bailey</option>
        <option value="James" id="James">James</option>
        <option value="Myles" id="Myles">Myles</option>
        <option value="Teddi" id="Teddi">Teddi</option>
      </select>

      <label htmlFor="threatLevel">Threat Level:</label>
      <select type="text" id="threatLevel" name="threatLevel">
        <option value="None" id="None">None</option>
        <option value="Low-Priority" id="Low-Priority">Low-Priority</option>
        <option value="Important" id="Important">Important</option>
        <option value="Critical" id="Critical">Critical</option>
      </select>
    </fieldset>
    <button type="submit">Submit New Bug</button>

        <button onClick={handleClose}>Close</button>
      </section>

    </div>
  );
};

export default Modal;