/*
This function component renders the start page of the app introduction when participants first open the app
 */

import React from 'react';

// import the task-symbol image
import TaskSymbolImage from "./base64Images/TutorialImage"
import AppSymbolImage from "./base64Images/AppSymbolImage";
import CloseSymbolImage from "./base64Images/CloseSymbol";

export default function ReshowAppInfoStartPage (props) {

    window.scrollTo(0, 0);

    return(
        <div className="content">
            <h4>
                1. Allgemeine Informationen zur Studien-App
            </h4>
            <p>
                Während Sie an der Studie teilnehmen und solange die Studien-App gestartet ist, öffnet die Studien-App in
                regelmäßigen Zeitabständen von ca. xx Stunden ein Fenster zur Datenerhebung. Die Datenerhebung umfasst dabei zwei Teile.
                Im ersten Teil geht es darum, eine Aufgabe zu bearbeiten. Im zweiten Teil werden Sie gebeten, Fragen zu beantworten.
                Die Aufgabe wird Ihnen in Schritt 2: "Vorschau Aufgabe" und die Fragen in Schritt 3: "Vorschau Fragen" gleich genauer erläutert.
            </p>
            <p>
                Nach Beginn der Studie läuft die Studien-App passiv im Hintergrund und startet automatisch beim Start ihres Computers.
                Solange die Studien-App gestartet ist (wie auch jetzt),
                sehen Sie das <strong>Studien-App Symbol</strong>
                &nbsp;<img style={{width: "20px", height: "20px"}} src={AppSymbolImage}/> in Ihrer <strong><i>Systemleiste</i></strong> (siehe Bild).
                Sie können die Studien-App jederzeit beenden, in dem Sie auf dieses Studien-App Symbol klicken und dann "Studien-App beenden" auswählen. Solange
                die Studien-App beendet ist, öffnet sich kein Fenster zur Datenerhebung. Falls Sie die Studien-App nach dem Beenden
                erneut starten möchten, klicken Sie auf das <strong>Studien-App Symbol</strong>
                &nbsp;<img style={{width: "20px", height: "20px"}} src={AppSymbolImage}/> auf Ihrem <strong><i>Desktop</i></strong>,
                welches durch die Installation der Studien-App dort hinzugefügt wurde.
                Über das Studien-App Symbol
                in der <strong><i>Systemleiste</i></strong> können Sie außerdem jederzeit diese Informationen zur Studien-App erneut aufrufen.
            </p>

            <figure className="image">
                <img src={TaskSymbolImage} style={{"border": "1px solid black", "borderTopStyle": "none",
                    "borderBottomStyle": "none"}}/>
                <figcaption>
                    Das Studien-App Symbol in Ihrer Systemleiste zeigt, dass die Studien-App gestartet ist. Durch Klicken auf das Studien-App
                    Symbol können Sie Optionen aufrufen, um die Studien-App zu beenden oder die Informationen zur Studien-App
                    erneut anzuzeigen.
                </figcaption>
            </figure>

            <p>
                Wenn die Studien-App ein Fenster zur Datenerhebung öffnet und Sie nicht an dieser Datenerhebung teilnehmen möchten,
                schließen Sie das Fenster mit dem <strong>Schließen Symbol</strong> <img style={{height: "13px"}} src={CloseSymbolImage}/>.
                Das Schließen des Fensters beendet die Datenerhebung und es werden keine Daten dieser
                Datenerhebung gespeichert. Das Schließen des Fensters der Datenerhebung beendet die Studien-App nicht.
            </p>
            <p>
                Die Datenerhebung der Studie endet nach xxx Tagen. Die Studien-App zeigt Ihnen an, dass die Datenerhebung beendet ist
                und es öffnet sich kein Fenster zur Datenerhebung mehr.
            </p>
            <p>
                Nach Ende der Datenerhebung oder falls Sie Ihre Studienteilnahme vorzeitig beenden möchten, können Sie die
                Studien-App deinstallieren. Eine Anleitung zur Deinstallation der Studien-App finden Sie
                in den <a onClick={() => {shell.openExternal("https://www.google.com")}}>Studiendokumenten</a>. Sobald Sie die Studien-App
                deinstallieren endet Ihre Teilnahme an dieser Studie und Sie können die Studienteilnahme nicht wieder aufnehmen.
            </p>

            <p>
                In den nächsten Schritten der Einführung werden Ihnen zunächst die Aufgabe und anschließend die Fragen vorgestellt, welche Sie bei
                der Datenerhebung bearbeiten.
            </p>

            <p>
                Bei weiteren Fragen zur Studien-App wenden Sie sich an:
            </p>
            <p>
                Paul Freihaut, M.Sc. <br/>
                Universität Freiburg <br/>
                Wirtschaftspsychologie <br/>
                E-Mail: <a href={"mailto:paul.freihaut@psychologie.uni-freiburg.de"}>paul.freihaut@psychologie.uni-freiburg.de</a>
            </p>

            <br/>

            <div className="control" style={{width: "100%", textAlign: "center"}}>
                <button className="button is-link" onClick={() => props.endCurrentPage()}>Weiter</button>
            </div>
        </div>
    )

}