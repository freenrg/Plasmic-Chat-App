// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fvjeJAc2KXTwtdHurp6o8v
// Component: QZgGTuqaQ6
import * as React from "react";
import Head from "next/head";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import AuthComponent from "../../AuthComponent"; // plasmic-import: IBqAoAJpzd/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_chat_app.module.css"; // plasmic-import: fvjeJAc2KXTwtdHurp6o8v/projectcss
import sty from "./PlasmicLogin.module.css"; // plasmic-import: QZgGTuqaQ6/css

export const PlasmicLogin__VariantProps = new Array();

export const PlasmicLogin__ArgProps = new Array();

function PlasmicLogin__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <AuthComponent
            data-plasmic-name={"authComponent"}
            data-plasmic-override={overrides.authComponent}
            className={classNames("__wab_instance", sty.authComponent)}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "authComponent"],
  authComponent: ["authComponent"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicLogin__ArgProps,
      internalVariantPropNames: PlasmicLogin__VariantProps
    });

    return PlasmicLogin__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLogin";
  } else {
    func.displayName = `PlasmicLogin.${nodeName}`;
  }
  return func;
}

export const PlasmicLogin = Object.assign(
  // Top-level PlasmicLogin renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    authComponent: makeNodeComponent("authComponent"),
    // Metadata about props expected for PlasmicLogin
    internalVariantProps: PlasmicLogin__VariantProps,
    internalArgProps: PlasmicLogin__ArgProps
  }
);

export default PlasmicLogin;
/* prettier-ignore-end */
