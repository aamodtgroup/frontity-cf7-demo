import Checkbox from "../components/Checkbox";

export const cf7Checkbox = {
    name: "cf7Checkbox",
    test: ({ node }) =>
        node.component === "span" &&
        /wpcf7-checkbox/.test(node.props.className),
    processor: ({ node }) => {
        const ariaInvalid =
            "undefined" === typeof node.props["aria-invalid"]
                ? null
                : node.props["aria-invalid"];
        const ariaRequired =
            "undefined" === typeof node.props["aria-required"]
                ? null
                : node.props["aria-required"];
        const className =
            "undefined" === typeof node.props.className
                ? null
                : node.props.className;
        const id = "undefined" === typeof node.props.id ? null : node.props.id;
        const name =
            "undefined" === typeof node.children[0].children[0].props.name ? null : node.children[0].children[0].props.name;
        let value =
            "undefined" === typeof node.children[0].props.value
                ? []
                : [];

        const optionChildrens =
            "undefined" === typeof node.children ? null : node.children;

        console.log(optionChildrens);

        const options = optionChildrens.map((item) => {

            let checked = ( 'undefined' !== typeof ( item.children[0].props.checked ) && 'checked' === item.children[0].props.checked ) ? true : false;

            if ( checked ) {

                value.push( item.children[0].props.value );

            }

            return {
                label: item.children[1].children[0].content,
                type: item.children[0].props.type,
                name: item.children[0].props.name,
                value: item.children[0].props.value,
                checked: checked
            };
        });

        node.props.inputProps = {
            ariaInvalid: ariaInvalid,
            ariaRequired: ariaRequired,
            className: className,
            id: id,
            name: name,
            value: value,
            options: options,
        };

        node.component = Checkbox;
        return node;
    },
};
