import React, { useEffect, useState } from 'react'
import W4aLinkInternal from './W4aLinkInternal'
import W4aLinkExternal from './W4aLinkExternal'
import { emptyProfile, loadProfile, setHeaderFooterScrollTarget } from './api'

function W4aPrivacy () {
  useEffect(() => { setHeaderFooterScrollTarget(false) }, []) // Run once

  const [profile, setProfile] = useState(emptyProfile)
  useEffect(() => { loadProfile(setProfile) }, []) // Run once

  return (
    <div className="lawtext">
      <header>
        <h2>Datenschutzerkl&auml;rung</h2>
        <p>
            Diese Datenschutzerkl&auml;rung kl&auml;rt Sie &uuml;ber die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen
            Daten (nachfolgend kurz „Daten“) im Rahmen der Erbringung unserer Leistungen sowie innerhalb unseres
            Onlineangebotes und der mit ihm verbundenen Webseiten, Funktionen und Inhalte sowie externen Onlinepr&auml;senzen,
            wie z.B. unser Social Media Profile auf (nachfolgend gemeinsam bezeichnet als „Onlineangebot“). Im Hinblick auf
            die verwendeten Begrifflichkeiten, wie z.B. „Verarbeitung“ oder „Verantwortlicher“ verweisen wir auf die
            Definitionen im Art. 4 der Datenschutzgrundverordnung (DSGVO).
        </p>
      </header>

      <h2><W4aLinkInternal text={'Verantwortliche(r): ' + profile.impressum.name} url="/impressum" /></h2>

      <h3>Arten der verarbeiteten Daten</h3>
      <ul>
        <li>Bestandsdaten (z.B., Personen-Stammdaten, Namen oder Adressen).</li>
        <li>Kontaktdaten (z.B., E-Mail, Telefonnummern).</li>
        <li>Inhaltsdaten (z.B., Texteingaben, Fotografien, Videos).</li>
        <li>Nutzungsdaten (z.B., besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten).</li>
        <li>Meta-/Kommunikationsdaten (z.B., Ger&auml;te-Informationen, IP-Adressen).</li>
      </ul>
      <h3>Kategorien betroffener Personen</h3>
      <p>
        Besucher und Nutzer des Onlineangebotes (Nachfolgend bezeichnen wir die betroffenen Personen zusammenfassend
        auch als „Nutzer“).
      </p>
      <h3>Zweck der Verarbeitung</h3>
      <ul>
        <li>Zurverf&uuml;gungstellung des Onlineangebotes, seiner Funktionen und  Inhalte.</li>
        <li>Beantwortung von Kontaktanfragen und Kommunikation mit Nutzern.</li>
        <li>Sicherheitsma&szlig;nahmen.</li>
        <li>Reichweitenmessung/Marketing</li>
      </ul>
      <h3>Verwendete Begrifflichkeiten </h3>
      <ul>
        <li>
          <strong>„Personenbezogene Daten“</strong> sind alle Informationen, die sich auf eine identifizierte oder identifizierbare
            nat&uuml;rliche Person (im Folgenden „betroffene Person“) beziehen; als identifizierbar wird eine nat&uuml;rliche
            Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen,
            zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung (z.B. Cookie) oder zu einem oder mehreren
            besonderen Merkmalen identifiziert werden kann, die Ausdruck der physischen, physiologischen, genetischen,
            psychischen, wirtschaftlichen, kulturellen oder sozialen Identit&auml;t dieser nat&uuml;rlichen Person sind.
        </li>
        <li>
          <strong>„Verarbeitung“</strong> ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgef&uuml;hrte Vorgang oder jede solche
            Vorgangsreihe im Zusammenhang mit personenbezogenen Daten. Der Begriff reicht weit und umfasst praktisch
            jeden Umgang mit Daten.
        </li>
        <li>
          <strong>„Pseudonymisierung“</strong> die Verarbeitung personenbezogener Daten in einer Weise, dass die personenbezogenen Daten
            ohne Hinzuziehung zus&auml;tzlicher Informationen nicht mehr einer spezifischen betroffenen Person zugeordnet
            werden k&ouml;nnen, sofern diese zus&auml;tzlichen Informationen gesondert aufbewahrt werden und technischen und
            organisatorischen Ma&szlig;nahmen unterliegen, die gew&auml;hrleisten, dass die personenbezogenen Daten nicht einer
            identifizierten oder identifizierbaren nat&uuml;rlichen Person zugewiesen werden.
        </li>
        <li>
          <strong>„Profiling“</strong> jede Art der automatisierten Verarbeitung personenbezogener Daten, die darin besteht, dass diese
            personenbezogenen Daten verwendet werden, um bestimmte pers&ouml;nliche Aspekte, die sich auf eine nat&uuml;rliche
            Person beziehen, zu bewerten, insbesondere um Aspekte bez&uuml;glich Arbeitsleistung, wirtschaftliche Lage,
            Gesundheit, pers&ouml;nliche Vorlieben, Interessen, Zuverl&auml;ssigkeit, Verhalten, Aufenthaltsort oder Ortswechsel
            dieser nat&uuml;rlichen Person zu analysieren oder vorherzusagen.
        </li>
        <li>
            Als <strong>„Verantwortlicher“</strong> wird die nat&uuml;rliche oder juristische Person, Beh&ouml;rde, Einrichtung oder andere Stelle,
            die allein oder gemeinsam mit anderen &uuml;ber die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten
            entscheidet, bezeichnet.
        </li>
        <li>
          <strong>„Auftragsverarbeiter“</strong> eine nat&uuml;rliche oder juristische Person, Beh&ouml;rde, Einrichtung oder andere Stelle,
            die personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet.
        </li>
      </ul>
      <h3>Ma&szlig;gebliche Rechtsgrundlagen</h3>
      <p>
        Nach Ma&szlig;gabe des Art. 13 DSGVO teilen wir Ihnen die Rechtsgrundlagen unserer Datenverarbeitungen mit.  F&uuml;r Nutzer
        aus dem Geltungsbereich der Datenschutzgrundverordnung (DSGVO), d.h. der EU und des EWG gilt, sofern die
        Rechtsgrundlage in der Datenschutzerkl&auml;rung nicht genannt wird, Folgendes:
      </p>
      <ul>
        <li>Die Rechtsgrundlage f&uuml;r die Einholung von Einwilligungen ist Art. 6 Abs. 1 lit. a und Art. 7 DSGVO;</li>
        <li>
            Die Rechtsgrundlage f&uuml;r die Verarbeitung zur Erf&uuml;llung unserer Leistungen und Durchf&uuml;hrung vertraglicher
            Ma&szlig;nahmen sowie Beantwortung von Anfragen ist Art. 6 Abs. 1 lit. b DSGVO;
        </li>
        <li>
            Die Rechtsgrundlage f&uuml;r die Verarbeitung zur Erf&uuml;llung unserer rechtlichen Verpflichtungen ist
            Art. 6 Abs. 1 lit. c DSGVO;
        </li>
        <li>
            F&uuml;r den Fall, dass lebenswichtige Interessen der betroffenen Person oder einer anderen nat&uuml;rlichen Person
            eine Verarbeitung personenbezogener Daten erforderlich machen, dient Art. 6 Abs. 1 lit. d DSGVO als
            Rechtsgrundlage.
        </li>
        <li>
            Die Rechtsgrundlage f&uuml;r die erforderliche Verarbeitung zur Wahrnehmung einer Aufgabe, die im &ouml;ffentlichen
            Interesse liegt oder in Aus&uuml;bung &ouml;ffentlicher Gewalt erfolgt, die dem Verantwortlichen &uuml;bertragen wurde
            ist Art. 6 Abs. 1 lit. e DSGVO.
        </li>
        <li>
            Die Rechtsgrundlage f&uuml;r die Verarbeitung zur Wahrung unserer berechtigten Interessen ist
            Art. 6 Abs. 1 lit. f DSGVO.
        </li>
        <li>
            Die Verarbeitung von Daten zu anderen Zwecken als denen, zu denen sie ehoben wurden, bestimmt sich nach den
            Vorgaben des Art 6 Abs. 4 DSGVO.
        </li>
        <li>
            Die Verarbeitung von besonderen Kategorien von Daten (entsprechend Art. 9 Abs. 1 DSGVO) bestimmt sich nach
            den Vorgaben des Art. 9 Abs. 2 DSGVO.
        </li>
      </ul>
      <h3>Sicherheitsma&szlig;nahmen</h3>
      <p>
        Wir treffen nach Ma&szlig;gabe der gesetzlichen Vorgabenunter Ber&uuml;cksichtigung des Stands der Technik, der
        Implementierungskosten und der Art, des Umfangs, der Umst&auml;nde und der Zwecke der Verarbeitung sowie der
        unterschiedlichen Eintrittswahrscheinlichkeit und Schwere des Risikos f&uuml;r die Rechte und Freiheiten nat&uuml;rlicher
        Personen, geeignete technische und organisatorische Ma&szlig;nahmen, um ein dem Risiko angemessenes Schutzniveau zu
        gew&auml;hrleisten.
      </p>
      <p>
        Zu den Ma&szlig;nahmen geh&ouml;ren insbesondere die Sicherung der Vertraulichkeit, Integrit&auml;t und Verf&uuml;gbarkeit von Daten
        durch Kontrolle des physischen Zugangs zu den Daten, als auch des sie betreffenden Zugriffs, der Eingabe,
        Weitergabe, der Sicherung der Verf&uuml;gbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet,
        die eine Wahrnehmung von Betroffenenrechten, L&ouml;schung von Daten und Reaktion auf Gef&auml;hrdung der Daten
        gew&auml;hrleisten. Ferner ber&uuml;cksichtigen wir den Schutz personenbezogener Daten bereits bei der Entwicklung,
        bzw. Auswahl von Hardware, Software sowie Verfahren, entsprechend dem Prinzip des Datenschutzes durch
        Technikgestaltung und durch datenschutzfreundliche Voreinstellungen.
      </p>
      <h3>Zusammenarbeit mit Auftragsverarbeitern, gemeinsam Verantwortlichen und Dritten</h3>
      <p>
        Sofern wir im Rahmen unserer Verarbeitung Daten gegen&uuml;ber anderen Personen und Unternehmen (Auftragsverarbeitern,
        gemeinsam Verantwortlichen oder Dritten) offenbaren, sie an diese &uuml;bermitteln oder ihnen sonst Zugriff auf die
        Daten gew&auml;hren, erfolgt dies nur auf Grundlage einer gesetzlichen Erlaubnis (z.B. wenn eine &uuml;bermittlung der
        Daten an Dritte, wie an Zahlungsdienstleister, zur Vertragserf&uuml;llung erforderlich ist), Nutzer eingewilligt
        haben, eine rechtliche Verpflichtung dies vorsieht oder auf Grundlage unserer berechtigten Interessen (z.B. beim
        Einsatz von Beauftragten, Webhostern, etc.).
      </p>
      <p>
        Sofern wir Daten anderen Unternehmen unserer Unternehmensgruppe offenbaren, &uuml;bermitteln oder ihnen sonst den
        Zugriff gew&auml;hren, erfolgt dies insbesondere zu administrativen Zwecken als berechtigtes Interesse und
        dar&uuml;berhinausgehend auf einer den gesetzlichen Vorgaben entsprechenden Grundlage.
      </p>
      <h3>&uuml;bermittlungen in Drittl&auml;nder</h3>
      <p>
        Sofern wir Daten in einem Drittland (d.h. au&szlig;erhalb der Europ&auml;ischen Union (EU), des Europ&auml;ischen
        Wirtschaftsraums (EWR) oder der Schweizer Eidgenossenschaft) verarbeiten oder dies im Rahmen der Inanspruchnahme
        von Diensten Dritter oder Offenlegung, bzw. &uuml;bermittlung von Daten an andere Personen oder Unternehmen geschieht,
        erfolgt dies nur, wenn es zur Erf&uuml;llung unserer (vor)vertraglichen Pflichten, auf Grundlage Ihrer Einwilligung,
        aufgrund einer rechtlichen Verpflichtung oder auf Grundlage unserer berechtigten Interessen geschieht.
        Vorbehaltlich gesetzlicher oder vertraglicher Erlaubnisse, verarbeiten oder lassen wir die Daten in einem
        Drittland nur beim Vorliegen der gesetzlichen Voraussetzungen. D.h. die Verarbeitung erfolgt z.B. auf Grundlage
        besonderer Garantien, wie der offiziell anerkannten Feststellung eines der EU entsprechenden Datenschutzniveaus
        (z.B. f&uuml;r die USA durch das „Privacy Shield“) oder Beachtung offiziell anerkannter spezieller vertraglicher
        Verpflichtungen.
      </p>
      <h3>Rechte der betroffenen Personen</h3>
      <ul>
        <li>
            Sie haben das Recht, eine Best&auml;tigung dar&uuml;ber zu verlangen, ob betreffende Daten verarbeitet werden und auf
            Auskunft &uuml;ber diese Daten sowie auf weitere Informationen und Kopie der Daten entsprechend den gesetzlichen
            Vorgaben.
        </li>
        <li>
            Sie haben entsprechend. den gesetzlichen Vorgaben das Recht, die Vervollst&auml;ndigung der Sie betreffenden Daten
            oder die Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen.
        </li>
        <li>
            Sie haben nach Ma&szlig;gabe der gesetzlichen Vorgaben das Recht zu verlangen, dass betreffende Daten unverz&uuml;glich
            gel&ouml;scht werden, bzw. alternativ nach Ma&szlig;gabe der gesetzlichen Vorgaben eine Einschr&auml;nkung der Verarbeitung
            der Daten zu verlangen.
        </li>
        <li>
            Sie haben das Recht zu verlangen, dass die Sie betreffenden Daten, die Sie uns bereitgestellt haben nach Ma&szlig;gabe
            der gesetzlichen Vorgaben zu erhalten und deren &uuml;bermittlung an andere Verantwortliche zu fordern.
        </li>
        <li>
            Sie haben ferner nach Ma&szlig;gabe der gesetzlichen Vorgaben das Recht, eine Beschwerde bei der zust&auml;ndigen
            Aufsichtsbeh&ouml;rde einzureichen.
        </li>
      </ul>
      <h3>Widerrufsrecht</h3>
      <p>
        Sie haben das Recht, erteilte Einwilligungen mit Wirkung f&uuml;r die Zukunft zu widerrufen.
      </p>
      <h3>Widerspruchsrecht</h3>
      <p>
        <strong>
            Sie k&ouml;nnen der k&uuml;nftigen Verarbeitung der Sie betreffenden Daten nach Ma&szlig;gabe der gesetzlichen Vorgaben
            jederzeit widersprechen. Der Widerspruch kann insbesondere gegen die Verarbeitung f&uuml;r Zwecke der Direktwerbung
            erfolgen.
        </strong>
      </p>
      <h3>Cookies und Widerspruchsrecht bei Direktwerbung</h3>
      <p>
        Als „Cookies“ werden kleine Dateien bezeichnet, die auf Rechnern der Nutzer gespeichert werden. Innerhalb der
        Cookies k&ouml;nnen unterschiedliche Angaben gespeichert werden. Ein Cookie dient prim&auml;r dazu, die Angaben zu einem
        Nutzer (bzw. dem Ger&auml;t auf dem das Cookie gespeichert ist) w&auml;hrend oder auch nach seinem Besuch innerhalb eines
        Onlineangebotes zu speichern. Als tempor&auml;re Cookies, bzw. „Session-Cookies“ oder „transiente Cookies“, werden
        Cookies bezeichnet, die gel&ouml;scht werden, nachdem ein Nutzer ein Onlineangebot verl&auml;sst und seinen Browser
        schlie&szlig;t. In einem solchen Cookie kann z.B. der Inhalt eines Warenkorbs in einem Onlineshop oder ein Login-Status
        gespeichert werden. Als „permanent“ oder „persistent“ werden Cookies bezeichnet, die auch nach dem Schlie&szlig;en des
        Browsers gespeichert bleiben. So kann z.B. der Login-Status gespeichert werden, wenn die Nutzer diese nach
        mehreren Tagen aufsuchen. Ebenso k&ouml;nnen in einem solchen Cookie die Interessen der Nutzer gespeichert werden,
        die f&uuml;r Reichweitenmessung oder Marketingzwecke verwendet werden. Als „Third-Party-Cookie“ werden Cookies
        bezeichnet, die von anderen Anbietern als dem Verantwortlichen, der das Onlineangebot betreibt, angeboten werden
        (andernfalls, wenn es nur dessen Cookies sind spricht man von „First-Party Cookies“).
      </p>
      <p>
        Wir k&ouml;nnen tempor&auml;re und permanente Cookies einsetzen und kl&auml;ren hier&uuml;ber im Rahmen unserer
        Datenschutzerkl&auml;rung auf.
      </p>
      <p>
        Falls die Nutzer nicht m&ouml;chten, dass Cookies auf ihrem Rechner gespeichert werden, werden sie gebeten die
        entsprechende Option in den Systemeinstellungen ihres Browsers zu deaktivieren. Gespeicherte Cookies k&ouml;nnen in
        den Systemeinstellungen des Browsers gel&ouml;scht werden. Der Ausschluss von Cookies kann zu Funktionseinschr&auml;nkungen
        dieses Onlineangebotes f&uuml;hren.
      </p>
      <p>
        Ein genereller Widerspruch gegen den Einsatz der zu Zwecken des Onlinemarketing eingesetzten Cookies kann bei
        einer Vielzahl der Dienste, vor allem im Fall des Trackings, &uuml;ber die US-amerikanische
        Seite <W4aLinkExternal url="http://www.aboutads.info/choices" text="http://www.aboutads.info/choices" /> oder die
        EU-Seite <W4aLinkExternal url="http://www.youronlinechoices.com" text="http://www.youronlinechoices.com" /> erkl&auml;rt werden.
        Des Weiteren kann die Speicherung von Cookies mittels deren Abschaltung in den Einstellungen des Browsers
        erreicht werden. Bitte beachten Sie, dass dann gegebenenfalls nicht alle Funktionen dieses Onlineangebotes
        genutzt werden k&ouml;nnen.
      </p>
      <h3>L&ouml;schung von Daten</h3>
      <p>
        Die von uns verarbeiteten Daten werden nach Ma&szlig;gabe der gesetzlichen Vorgaben gel&ouml;scht oder in ihrer Verarbeitung
        eingeschr&auml;nkt. Sofern nicht im Rahmen dieser Datenschutzerkl&auml;rung ausdr&uuml;cklich angegeben, werden die bei uns
        gespeicherten Daten gel&ouml;scht, sobald sie f&uuml;r ihre Zweckbestimmung nicht mehr erforderlich sind und der L&ouml;schung
        keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
      </p>
      <p>
        Sofern die Daten nicht gel&ouml;scht werden, weil sie f&uuml;r andere und gesetzlich zul&auml;ssige Zwecke erforderlich sind,
        wird deren Verarbeitung eingeschr&auml;nkt. D.h. die Daten werden gesperrt und nicht f&uuml;r andere Zwecke verarbeitet.
        Das gilt z.B. f&uuml;r Daten, die aus handels- oder steuerrechtlichen Gr&uuml;nden aufbewahrt werden m&uuml;ssen.
      </p>
      <h3>&Auml;nderungen und Aktualisierungen der Datenschutzerkl&auml;rung</h3>
      <p>
        Wir bitten Sie sich regelm&auml;&szlig;ig &uuml;ber den Inhalt unserer Datenschutzerkl&auml;rung zu informieren. Wir passen die
        Datenschutzerkl&auml;rung an, sobald die &auml;nderungen der von uns durchgef&uuml;hrten Datenverarbeitungen dies erforderlich
        machen. Wir informieren Sie, sobald durch die &auml;nderungen eine Mitwirkungshandlung Ihrerseits (z.B. Einwilligung)
        oder eine sonstige individuelle Benachrichtigung erforderlich wird.
      </p>
      <h3>Kontaktaufnahme</h3>
      <p>
        Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular, E-Mail, Telefon oder via sozialer Medien) werden
        die Angaben des Nutzers zur Bearbeitung der Kontaktanfrage und deren Abwicklung gem. Art. 6 Abs. 1 lit. b.
        (im Rahmen vertraglicher-/vorvertraglicher Beziehungen),  Art. 6 Abs. 1 lit. f. (andere Anfragen) DSGVO
        verarbeitet. Die Angaben der Nutzer k&ouml;nnen in einem Customer-Relationship-Management System (&ldquo;CRM System&rdquo;)
        oder vergleichbarer Anfragenorganisation gespeichert werden.
      </p>
      <p>
        Wir l&ouml;schen die Anfragen, sofern diese nicht mehr erforderlich sind. Wir &uuml;berpr&uuml;fen die Erforderlichkeit
        alle zwei Jahre; Ferner gelten die gesetzlichen Archivierungspflichten.
      </p>
      <h3>Hosting und E-Mail-Versand</h3>
      <p>
        Die von uns in Anspruch genommenen Hosting-Leistungen dienen der Zurverf&uuml;gungstellung der folgenden
        Leistungen: Infrastruktur- und Plattformdienstleistungen, Rechenkapazit&auml;t, Speicherplatz und
        Datenbankdienste, E-Mail-Versand, Sicherheitsleistungen sowie technische Wartungsleistungen, die wir zum
        Zwecke des Betriebs dieses Onlineangebotes einsetzen.
      </p>
      <p>
        Hierbei verarbeiten wir, bzw. unser Hostinganbieter Bestandsdaten, Kontaktdaten, Inhaltsdaten, Vertragsdaten,
        Nutzungsdaten, Meta- und Kommunikationsdaten von Kunden, Interessenten und Besuchern dieses Onlineangebotes
        auf Grundlage unserer berechtigten Interessen an einer effizienten und sicheren Zurverf&uuml;gungstellung dieses
        Onlineangebotes gem. Art. 6 Abs. 1 lit. f DSGVO i.V.m. Art. 28 DSGVO (Abschluss Auftragsverarbeitungsvertrag).
      </p>
      <h3>Erhebung von Zugriffsdaten und Logfiles</h3>
      <p>
        Wir, bzw. unser Hostinganbieter, erhebt auf Grundlage unserer berechtigten Interessen im Sinne des Art. 6 Abs. 1
        lit. f. DSGVO Daten &uuml;ber jeden Zugriff auf den Server, auf dem sich dieser Dienst befindet
        (sogenannte Serverlogfiles). Zu den Zugriffsdaten geh&ouml;ren Name der abgerufenen Webseite, Datei, Datum und Uhrzeit
        des Abrufs, &uuml;bertragene Datenmenge, Meldung &uuml;ber erfolgreichen Abruf, Browsertyp nebst Version, das Betriebssystem
        des Nutzers, Referrer URL (die zuvor besuchte Seite), IP-Adresse und der anfragende Provider.
      </p>
      <p>
        Logfile-Informationen werden aus Sicherheitsgr&uuml;nden (z.B. zur Aufkl&auml;rung von Missbrauchs- oder Betrugshandlungen)
        f&uuml;r die Dauer von maximal 7 Tagen gespeichert und danach gel&ouml;scht. Daten, deren weitere Aufbewahrung zu
        Beweiszwecken erforderlich ist, sind bis zur endg&uuml;ltigen Kl&auml;rung des jeweiligen Vorfalls von der L&ouml;schung
        ausgenommen.
      </p>
      <h3>Onlinepr&auml;senzen in sozialen Medien</h3>
      <p>
        Wir unterhalten Onlinepr&auml;senzen innerhalb sozialer Netzwerke und Plattformen, um mit den dort aktiven Kunden,
        Interessenten und Nutzern kommunizieren und sie dort &uuml;ber unsere Leistungen informieren zu k&ouml;nnen.
      </p>
      <p>
        Wir weisen darauf hin, dass dabei Daten der Nutzer au&szlig;erhalb des Raumes der Europ&auml;ischen Union verarbeitet werden
        k&ouml;nnen. Hierdurch k&ouml;nnen sich f&uuml;r die Nutzer Risiken ergeben, weil so z.B. die Durchsetzung der Rechte der Nutzer
        erschwert werden k&ouml;nnte. Im Hinblick auf US-Anbieter die unter dem Privacy-Shield zertifiziert sind, weisen wir
        darauf hin, dass sie sich damit verpflichten, die Datenschutzstandards der EU einzuhalten.
      </p>
      <p>
        Ferner werden die Daten der Nutzer im Regelfall f&uuml;r Marktforschungs- und Werbezwecke verarbeitet. So k&ouml;nnen z.B.
        aus dem Nutzungsverhalten und sich daraus ergebenden Interessen der Nutzer Nutzungsprofile erstellt werden. Die
        Nutzungsprofile k&ouml;nnen wiederum verwendet werden, um z.B. Werbeanzeigen innerhalb und au&szlig;erhalb der Plattformen
        zu schalten, die mutma&szlig;lich den Interessen der Nutzer entsprechen. Zu diesen Zwecken werden im Regelfall Cookies
        auf den Rechnern der Nutzer gespeichert, in denen das Nutzungsverhalten und die Interessen der Nutzer gespeichert
        werden. Ferner k&ouml;nnen in den Nutzungsprofilen auch Daten unabh&auml;ngig der von den Nutzern verwendeten Ger&auml;te
        gespeichert werden (insbesondere wenn die Nutzer Mitglieder der jeweiligen Plattformen sind und bei diesen
        eingeloggt sind).
      </p>
      <p>
        Die Verarbeitung der personenbezogenen Daten der Nutzer erfolgt auf Grundlage unserer berechtigten Interessen an
        einer effektiven Information der Nutzer und Kommunikation mit den Nutzern gem. Art. 6 Abs. 1 lit. f. DSGVO. Falls
        die Nutzer von den jeweiligen Anbietern um eine Einwilligung in die Datenverarbeitung gebeten werden (d.h. ihr
        Einverst&auml;ndnis z.B. &uuml;ber das Anhaken eines Kontrollk&auml;stchens oder Best&auml;tigung einer Schaltfl&auml;che erkl&auml;ren) ist die
        Rechtsgrundlage der Verarbeitung Art. 6 Abs. 1 lit. a., Art. 7 DSGVO.
      </p>
      <p>
        F&uuml;r eine detaillierte Darstellung der jeweiligen Verarbeitungen und der Widerspruchsm&ouml;glichkeiten (Opt-Out),
        verweisen wir auf die nachfolgend verlinkten Angaben der Anbieter.
      </p>
      <p>
        Auch im Fall von Auskunftsanfragen und der Geltendmachung von Nutzerrechten, weisen wir darauf hin, dass diese am
        effektivsten bei den Anbietern geltend gemacht werden k&ouml;nnen. Nur die Anbieter haben jeweils Zugriff auf die Daten
        der Nutzer und k&ouml;nnen direkt entsprechende Ma&szlig;nahmen ergreifen und Ausk&uuml;nfte geben. Sollten Sie dennoch Hilfe
        ben&ouml;tigen, dann k&ouml;nnen Sie sich an uns wenden.
      </p>
      <ul>
        <li>
            Facebook (Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland)
          <ul>
            <li>
                    Datenschutzerkl&auml;rung:
              <W4aLinkExternal url="https://www.facebook.com/about/privacy" text="https://www.facebook.com/about/privacy" />
            </li>
            <li>
                    Opt-Out:
              <W4aLinkExternal url="https://www.facebook.com/settings?tab=ads" text="https://www.facebook.com/settings?tab=ads" />
                    und
              <W4aLinkExternal url="http://www.youronlinechoices.com" text="http://www.youronlinechoices.com" />
            </li>
            <li>
                    Privacy Shield:
              <W4aLinkExternal url="https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&status=Active" text="https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&amp;status=Active" />
            </li>
          </ul>
        </li>
        <li>
            Google/ YouTube (Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA)
          <ul>
            <li>
                    Datenschutzerkl&auml;rung:
              <W4aLinkExternal url="https://policies.google.com/privacy" text="https://policies.google.com/privacy" />
            </li>
            <li>
                    Opt-Out:
              <W4aLinkExternal url="https://adssettings.google.com/authenticated" text="https://adssettings.google.com/authenticated" />
            </li>
            <li>
                    Privacy Shield:
              <W4aLinkExternal url="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active" text="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&amp;status=Active" />
            </li>
          </ul>
        </li>
        <li>
            Instagram (Instagram Inc., 1601 Willow Road, Menlo Park, CA, 94025, USA)
          <ul>
            <li>
                    Datenschutzerkl&auml;rung / Opt-Out:
              <W4aLinkExternal url="http://instagram.com/about/legal/privacy" text="http://instagram.com/about/legal/privacy" />
            </li>
          </ul>
        </li>
        <li>
            Twitter (Twitter Inc., 1355 Market Street, Suite 900, San Francisco, CA 94103, USA)
          <ul>
            <li>
                    Datenschutzerkl&auml;rung:
              <W4aLinkExternal url="https://twitter.com/de/privacy" text="https://twitter.com/de/privacy" />
            </li>
            <li>
                    Opt-Out:
              <W4aLinkExternal url="https://twitter.com/personalization" text="https://twitter.com/personalization" />
            </li>
            <li>
                    Privacy Shield:
              <W4aLinkExternal url="https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO&status=Active" text="https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO&amp;status=Active" />
            </li>
          </ul>
        </li>
        <li>
            Pinterest (Pinterest Inc., 635 High Street, Palo Alto, CA, 94301, USA)
          <ul>
            <li>
                    Datenschutzerkl&auml;rung / Opt-Out:
              <W4aLinkExternal url="https://about.pinterest.com/de/privacy-policy" text="https://about.pinterest.com/de/privacy-policy" />
            </li>
          </ul>
        </li>
        <li>
            LinkedIn (LinkedIn Ireland Unlimited Company Wilton Place, Dublin 2, Irland)
          <ul>
            <li>
                    Datenschutzerkl&auml;rung:
              <W4aLinkExternal url="https://www.linkedin.com/legal/privacy-policy" text="https://www.linkedin.com/legal/privacy-policy" />
            </li>
            <li>
                    Opt-Out:
              <W4aLinkExternal url="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out" text="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out" />
            </li>
            <li>
                    Privacy Shield:
              <W4aLinkExternal url="https://www.privacyshield.gov/participant?id=a2zt0000000L0UZAA0&status=Active" text="https://www.privacyshield.gov/participant?id=a2zt0000000L0UZAA0&amp;status=Active" />
            </li>
          </ul>
        </li>
        <li>
            Xing (XING AG, Dammtorstra&szlig;e 29-32, 20354 Hamburg, Deutschland)
          <ul>
            <li>
                    Datenschutzerkl&auml;rung / Opt-Out:
              <W4aLinkExternal url="https://privacy.xing.com/de/datenschutzerklaerung" text="https://privacy.xing.com/de/datenschutzerklaerung" />
            </li>
          </ul>
        </li>
        <li>
            Wakalet (Wakelet Limited, 76 Quay Street, Manchester, M3 4PR, United Kingdom)
          <ul>
            <li>
                    Datenschutzerkl&auml;rung / Opt-Out:
              <W4aLinkExternal url="https://wakelet.com/privacy.html" text="https://wakelet.com/privacy.html" />
            </li>
          </ul>
        </li>
        <li>
            Soundcloud (SoundCloud Limited, Rheinsberger Str. 76/77, 10115 Berlin, Deutschland)
          <ul>
            <li>
                    Datenschutzerkl&auml;rung / Opt-Out:
              <W4aLinkExternal url="https://soundcloud.com/pages/privacy" text="https://soundcloud.com/pages/privacy" />.
            </li>
          </ul>
        </li>
      </ul>
      <h3>Einbindung von Diensten und Inhalten Dritter</h3>
      <p>
        Wir setzen innerhalb unseres Onlineangebotes auf Grundlage unserer berechtigten Interessen (d.h. Interesse an der
        Analyse, Optimierung und wirtschaftlichem Betrieb unseres Onlineangebotes im Sinne des
        Art. 6 Abs. 1 lit. f. DSGVO) Inhalts- oder Serviceangebote von Drittanbietern ein, um deren Inhalte und Services,
        wie z.B. Videos oder Schriftarten einzubinden (nachfolgend einheitlich bezeichnet als “Inhalte”).
      </p>
      <p>
        Dies setzt immer voraus, dass die Drittanbieter dieser Inhalte, die IP-Adresse der Nutzer wahrnehmen, da sie ohne
        die IP-Adresse die Inhalte nicht an deren Browser senden k&ouml;nnten. Die IP-Adresse ist damit f&uuml;r die Darstellung
        dieser Inhalte erforderlich. Wir bem&uuml;hen uns nur solche Inhalte zu verwenden, deren jeweilige Anbieter die
        IP-Adresse lediglich zur Auslieferung der Inhalte verwenden. Drittanbieter k&ouml;nnen ferner so genannte Pixel-Tags
        (unsichtbare Grafiken, auch als &ldquo;Web Beacons&rdquo; bezeichnet) f&uuml;r statistische oder Marketingzwecke verwenden. Durch
        die &ldquo;Pixel-Tags&rdquo; k&ouml;nnen Informationen, wie der Besucherverkehr auf den Seiten dieser Website ausgewertet werden.
        Die pseudonymen Informationen k&ouml;nnen ferner in Cookies auf dem Ger&auml;t der Nutzer gespeichert werden und unter
        anderem technische Informationen zum Browser und Betriebssystem, verweisende Webseiten, Besuchszeit sowie weitere
        Angaben zur Nutzung unseres Onlineangebotes enthalten, als auch mit solchen Informationen aus anderen Quellen
        verbunden werden.
      </p>
      <h3>Instagram</h3>
      <p>
        Innerhalb unseres Onlineangebotes k&ouml;nnen Funktionen und Inhalte des Dienstes Instagram, angeboten durch die
        Instagram Inc., 1601 Willow Road, Menlo Park, CA, 94025, USA, eingebunden werden. Hierzu k&ouml;nnen z.B. Inhalte wie
        Bilder, Videos oder Texte und Schaltfl&auml;chen geh&ouml;ren, mit denen Nutzer Inhalte dieses Onlineangebotes innerhalb von
        Instagram teilen k&ouml;nnen. Sofern die Nutzer Mitglieder der Plattform Instagram sind, kann Instagram den Aufruf der
        o.g. Inhalte und Funktionen den dortigen Profilen der Nutzer zuordnen. Datenschutzerkl&auml;rung von Instagram:
        <W4aLinkExternal url="http://instagram.com/about/legal/privacy" text="http://instagram.com/about/legal/privacy" />.
      </p>
      <footer>
        Datenschutzerkl&auml;rung erstellt durch&nbsp;
        <W4aLinkExternal url="https://datenschutz-generator.de" text="Datenschutz-Generator.de von RA Dr. Thomas Schwenke" />
      </footer>
    </div>
  )
}

export default W4aPrivacy
