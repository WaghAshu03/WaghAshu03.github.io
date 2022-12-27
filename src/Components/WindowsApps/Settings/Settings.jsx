import React from "react";
import "./Settings.scss";
import WindowsApp from "../WindowsApp";
import settingsLogo from "../../../Resources/icon/settings.png";
import { changeTheme } from "../../../GlobalFunctions";
import { useEffect } from "react";

function Settings() {
  useEffect(() => {
    changeTheme();
    changeTheme();
  }, []);

  return (
    <WindowsApp
      windowId="settings"
      width="50vw"
      height="50vh"
      top="100px"
      left="100px"
      logo={settingsLogo}
      windowTitle="Settings"
      content={
        <>
          <div id="set1">
            <button
              onClick={() => {
                changeTheme();
              }}
            >
              sdf
            </button>
          </div>
          <div id="set2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas sed,
            saepe voluptate dicta optio eaque laborum modi quo nobis veritatis
            voluptates deleniti officiis repudiandae dignissimos, consectetur
            quaerat ad iste qui. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quia ullam vitae in, iusto odit est distinctio,
            enim soluta eum ipsum, omnis sunt accusantium dolor assumenda
            veritatis praesentium et optio necessitatibus. Praesentium dolorem
            aut, inventore vitae delectus fugiat ipsam cum quae qui quisquam
            tempora similique sunt itaque asperiores perferendis est recusandae
            adipisci exercitationem aliquam fugit saepe eaque? Ea ipsum maxime
            illum sed voluptates harum velit repellendus rem. Cumque amet
            assumenda facere saepe minima nobis qui veritatis minus maiores
            impedit quibusdam expedita molestiae enim molestias, ducimus odio at
            doloribus corporis id vel tempore similique cum exercitationem
            quaerat? Nemo explicabo corrupti in officia quia modi. Nesciunt
            laboriosam eveniet recusandae consequuntur quos, itaque qui eius
            quae vel provident earum ex soluta suscipit minus facilis. Eius
            incidunt labore laudantium accusamus vero vitae itaque
            exercitationem. Iste facere sed, non temporibus laudantium ipsum,
            sint deleniti porro soluta obcaecati aliquam pariatur natus voluptas
            saepe. Exercitationem dignissimos illo saepe atque est unde a, quasi
            adipisci facere? Repellat voluptate culpa alias quasi animi vitae
            amet, sint ex aspernatur natus sit debitis pariatur id quia
            temporibus laboriosam perferendis atque provident totam in ab
            explicabo consequuntur omnis. Consequuntur odit deleniti,
            consequatur neque repudiandae pariatur quaerat facilis corrupti
            provident iusto in dignissimos, magni et ullam commodi officia!
            Delectus esse nobis laboriosam! Doloremque doloribus labore
            dignissimos commodi, dolor exercitationem harum quis nostrum. Velit,
            esse corporis doloremque iste nemo pariatur unde quia. Commodi
            repellendus eligendi eum quas quibusdam consequatur obcaecati
            deleniti nobis magni rem, voluptate voluptatem, repellat,
            consequuntur cupiditate dolores alias repudiandae quae nemo suscipit
            similique? Fugit necessitatibus aliquam iusto maxime. Iste dolorem
            doloribus consectetur est? Est ab iste sapiente impedit dolorum
            itaque iure debitis voluptatum quia molestias, hic adipisci neque
            ea. Voluptatem aliquam harum ut! Non officiis facilis voluptate
            rerum amet voluptas? Placeat vitae vero obcaecati autem perferendis
            fuga ipsum dolor vel temporibus repudiandae earum sed eaque
            consequatur neque, aliquam voluptatem quibusdam nihil laudantium,
            libero consectetur nisi aliquid repellendus dolorum! Dolores est
            neque minus perferendis dolore architecto, unde at iusto reiciendis
            esse modi ut quaerat et delectus, dolor impedit in dolorum
            repudiandae aut exercitationem, a perspiciatis necessitatibus
            voluptates rem! Eveniet officiis sequi sed, reprehenderit asperiores
            veritatis saepe maiores maxime. Quos vitae doloribus ab eos laborum
            doloremque qui consectetur dicta exercitationem soluta. Recusandae
            suscipit nesciunt porro ipsa alias nemo, harum cupiditate ab
            aspernatur minima. Et vitae vero fugit explicabo sit iste
            dignissimos excepturi amet, praesentium minima cumque sequi quae eos
            quaerat, earum recusandae, itaque maiores harum enim exercitationem
            in? Soluta fuga deleniti eveniet delectus! Cumque, nulla, voluptas,
            voluptates molestiae in accusantium distinctio molestias libero eius
            vitae hic iure perspiciatis? Id tempore ad atque? Vero quas minima
            sed deserunt voluptatem aliquam odio quibusdam earum quaerat autem
            vitae incidunt tenetur explicabo, ex delectus ut expedita corporis
            maxime beatae eum? Aut aliquam officiis autem quos deleniti
            perspiciatis rem possimus qui nam voluptatum soluta quaerat quisquam
            est corporis necessitatibus amet reprehenderit eaque debitis
            temporibus, laudantium dolorum. Qui quia dolores facere vel ullam
            amet dignissimos nam deserunt expedita quibusdam rerum maxime
            accusamus dicta esse quod excepturi aperiam itaque asperiores
            tempore incidunt, odio ut quo alias molestias? Vel dolorum
            reiciendis mollitia ea assumenda! Eligendi obcaecati inventore
            voluptatum adipisci explicabo quo facilis sed debitis libero, ad
            provident hic, voluptates quam officiis ipsa fuga. Minima quaerat
            quidem accusantium voluptas ipsa laudantium hic expedita officiis,
            labore eveniet possimus sunt, ipsam enim amet, praesentium neque
            quis dolorum odio pariatur impedit deserunt. Eum modi repudiandae
            nam nulla qui explicabo impedit illum deserunt vero, vitae
            reprehenderit tenetur ut culpa saepe assumenda rerum sequi ab cum
            delectus fugiat? Unde corporis esse laborum labore atque quibusdam
            facere commodi eaque perspiciatis dolore. Optio repellendus vel
            eligendi id deleniti sit quaerat itaque odio iure, at inventore
            porro minus non, autem expedita eveniet nulla velit facere voluptas
            eius cum cupiditate consequatur saepe vitae. Porro vel hic quibusdam
            autem non rerum sunt delectus explicabo ab, eos, voluptatibus
            dolorum maxime nemo consequuntur itaque est accusamus! Quis suscipit
            numquam, tempora illo cumque esse porro ratione earum inventore
            placeat nobis tenetur commodi eligendi laudantium incidunt maxime
            iste odit enim, mollitia rem? Veniam, qui nam. Libero debitis fugit
            veniam nostrum neque quo ipsam reprehenderit, tempore ratione
            voluptas nemo voluptates porro consequatur vel rem et repudiandae
            modi excepturi sunt laudantium fuga nesciunt aliquid iusto! Neque
            sapiente illo omnis repellat adipisci impedit consequatur
            repudiandae blanditiis placeat quidem, ex cumque provident minima
            harum dolore eum dolor. Aliquam ipsa itaque ab provident, eveniet
            consectetur voluptatibus? Ipsum totam laborum numquam reiciendis
            accusamus quibusdam mollitia quod atque officia eos ad magnam ex,
            facilis magni ducimus eius voluptatibus beatae voluptate? Soluta
            nobis incidunt neque adipisci, laborum esse est, sint illum ab sequi
            explicabo quo non ex ea dolorum eos perspiciatis? Itaque illo
            ducimus voluptas blanditiis soluta laborum temporibus rem deserunt
            necessitatibus perspiciatis labore, exercitationem dolorum modi ad
            totam cumque impedit eveniet saepe. Voluptatibus necessitatibus
            repellendus sed mollitia amet odio ipsam vel voluptate totam
            quaerat?
          </div>
        </>
      }
      footer="Footer"
    />
  );
}
export default Settings;
