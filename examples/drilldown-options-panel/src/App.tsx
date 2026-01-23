import {
  Page,
  DrillDown,
  useDrillDown,
  Button,
  Flex,
} from "@servicetitan/anvil2";
import { useLayoutEffect } from "react";

function App() {
  const { drillDownProps, setIndex, back, next } = useDrillDown();

  // Set the initial index after components have registered
  useLayoutEffect(() => {
    setTimeout(() => {
      setIndex(1);
    }, 400);
  }, [setIndex]);

  return (
    <div style={{ width: "100vw", minWidth: "23rem" }}>
      <Page>
        <Page.Header title="Page Title" />
        <Page.Content>Page Content</Page.Content>
        <Page.Panel
          {...drillDownProps}
          open
          size="medium"
          defaultDrillDownIndex={1}
        >
          <div>
            <div>This is the panel body content.</div>
            <Flex direction="column" gap="2" style={{ marginTop: "1rem" }}>
              <Button onClick={() => setIndex(0)}>Set index to 0</Button>
              <Button onClick={() => setIndex(1)}>Set index to 1</Button>
            </Flex>
          </div>

          <DrillDown index={0}>
            <DrillDown.Header>DrillDown Index 0</DrillDown.Header>
            <DrillDown.Content>
              Tempor nisi culpa consectetur enim laborum. Sunt labore pariatur
              qui proident reprehenderit velit minim consequat magna dolor est
              minim. Ad dolor quis do ea velit. Velit quis consequat aute qui
              nulla et cillum nostrud pariatur dolor ut. Sunt ullamco
              exercitation deserunt ad elit. Est incididunt cillum nisi sint
              reprehenderit reprehenderit labore mollit ex sint veniam.
              Consectetur duis quis magna amet incididunt fugiat. Ex irure elit
              dolore culpa. Culpa nostrud proident cupidatat amet est dolore
              occaecat proident adipisicing incididunt ipsum. Esse ipsum
              pariatur voluptate fugiat eu ut incididunt laboris sint eu irure
              sint elit aliquip. Sit sunt duis ut ut consequat labore nostrud
              pariatur excepteur Lorem quis reprehenderit. Elit fugiat mollit
              excepteur labore ullamco adipisicing veniam nulla. Voluptate
              consectetur excepteur commodo cillum officia laboris aliquip
              mollit. In nisi non cillum proident eu eiusmod ex incididunt
              cupidatat dolor deserunt do culpa ad. Cupidatat cillum proident
              dolore eu fugiat reprehenderit elit esse. Et nostrud sunt anim
              excepteur enim in do dolor ut. Ea officia ex ex veniam incididunt.
              Amet eu sit est Lorem mollit. Amet voluptate officia commodo
              voluptate et sint do esse ad incididunt elit eu. Ex sint voluptate
              aute et ea. Incididunt enim anim aliqua excepteur ea pariatur nisi
              ullamco officia id. Nisi dolor qui ipsum cillum do qui commodo
              consequat cillum occaecat. Aliqua proident sunt do est ut sunt
              nulla esse eu excepteur tempor occaecat incididunt. Velit laborum
              quis do exercitation aliqua mollit. Aute ex tempor adipisicing
              laboris sunt non dolor ullamco aliqua eiusmod cupidatat id et
              fugiat. Laboris non excepteur anim deserunt proident ullamco
              dolore cupidatat. Cupidatat excepteur Lorem laboris ut aliquip do
              est commodo Lorem enim voluptate. Consectetur sunt et cupidatat
              aliquip amet pariatur Lorem eu laboris duis exercitation
              exercitation culpa non. Amet proident velit veniam ad sunt est ea
              fugiat enim quis cupidatat labore. Amet cillum tempor voluptate et
              pariatur eiusmod magna eu. Velit minim occaecat nisi eiusmod magna
              ex nostrud minim voluptate aute quis fugiat do. Esse excepteur
              nulla dolore sunt sit esse. Minim aliqua adipisicing laborum et
              non esse dolor incididunt. Incididunt quis duis velit pariatur
              cillum excepteur laboris. Laboris velit et ut dolore incididunt ad
              ipsum excepteur magna enim. Sint enim aute velit ea veniam nisi
              qui culpa. Proident proident ea occaecat ut ea. Quis reprehenderit
              sit ea mollit. Cillum proident qui commodo sint consectetur
              eiusmod anim irure eiusmod. Nisi occaecat irure anim anim officia
              ut est. Ullamco reprehenderit anim dolore ut sit velit. Nisi anim
              quis adipisicing aliqua veniam do. Veniam sint irure pariatur
              adipisicing culpa. Laboris nulla cillum nisi nulla sit mollit eu
              ipsum magna tempor magna sit. Cupidatat qui amet incididunt quis
              amet eu nostrud culpa irure laborum laborum eu. Consequat dolore
              fugiat commodo consequat pariatur. Aliqua id et officia culpa
              tempor tempor dolore in. Consectetur ad id qui eiusmod ullamco
              velit nulla velit cupidatat exercitation tempor excepteur commodo.
              Duis labore et id id. Voluptate mollit non nulla nisi ad nostrud
              non nisi dolore officia. Veniam irure in eu enim reprehenderit qui
              ullamco nulla aliquip et irure irure ad.
            </DrillDown.Content>
            <DrillDown.Footer>
              <Flex gap="3" justifyContent="flex-end">
                <Button onClick={back}>Cancel</Button>
                <Button appearance="primary" onClick={next}>
                  Continue
                </Button>
              </Flex>
            </DrillDown.Footer>
          </DrillDown>

          <DrillDown index={1}>
            <DrillDown.Header>Drilldown Header</DrillDown.Header>
            <DrillDown.Content>Content of Drilldown</DrillDown.Content>
            <DrillDown.Footer>
              <Flex gap="3" justifyContent="flex-end">
                <Button onClick={back}>Back</Button>
                <Button appearance="primary" onClick={next}>
                  Continue
                </Button>
              </Flex>
            </DrillDown.Footer>
          </DrillDown>
        </Page.Panel>
      </Page>
    </div>
  );
}

export default App;
