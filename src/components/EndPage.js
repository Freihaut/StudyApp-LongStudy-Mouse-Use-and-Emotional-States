/*
This function component renders the end page that shows that the study has ended
 */

import React from 'react'
const {ipcRenderer, shell} = require("electron");


export default function StudyEnd (props) {

    // scroll to the top of the page
    window.scrollTo(0, 0);

    return(

        <div className="section">
            <div className={"content"}>
                <div className={"notification is-light is-info"}>
                    <h3 className={"title"}>
                        Die Studie ist beendet
                    </h3>
                    <p>
                       Die Datenerhebung endete am {new Date(props.startDate + 12096e5).toLocaleDateString("de")}.
                        Die Studien-App erfüllt nun kein Zweck mehr und Sie können die Studien-App deinstallieren. Es ist empfohlen,
                        die Studien-App zu deinstallieren. Die Deinstallation der Studien-App ist jedoch nicht notwendig.
                        &nbsp;<a onClick={()=> {shell.openExternal("https://drive.google.com/file/d/1A30KQoS_uOBAIvriIuZRSg7MuZ7GzOmU/view?usp=sharing")}}>In den Unterlagen zur Studien-App</a>&nbsp;
                        finden Sie eine kurze Anleitung zur Deinstallation. Falls Sie
                        Hilfe mit der Deinstallation benötigen, wenden Sie sich gerne jederzeit an den unten stehenden Kontakt.
                    </p>
                    <h4 className={"title"}>
                        Vielen herzlichen Dank für Ihre Teilnahme an dieser Studie und Ihren Beitrag zur Wissenschaft!
                    </h4>
                    <br/>
                    <p>
                        Falls Sie noch Rückfragen zu der Studie oder der Studien-App haben, können Sie mich
                        gerne kontaktieren.
                    </p>
                    <p>
                        Paul Freihaut, M.Sc. <br/>
                        Universität Freiburg <br/>
                        Wirtschaftspsychologie <br/>
                        Engelbergerstraße 41 <br/>
                        D-79085 Freiburg <br/>
                        E-Mail: <a href={"mailto:paul.freihaut@psychologie.uni-freiburg.de"}>paul.freihaut@psychologie.uni-freiburg.de</a>
                    </p>
                    <br/>
                    <div className="control" style={{width: "100%", textAlign: "center"}}>
                        <button className={"button is-link"}
                                onClick={() => ipcRenderer.send("close")}>
                            Studien-App beenden
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}