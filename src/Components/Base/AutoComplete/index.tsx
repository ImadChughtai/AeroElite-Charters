// import { useEffect, useState } from "react";
// import Autocomplete, { AutocompleteProps } from "@mui/material/Autocomplete";

// interface AutocompleteInputProps
//   extends Partial<
//     AutocompleteProps<
//       undefined,
//       boolean | undefined,
//       boolean | undefined,
//       boolean | undefined
//     >
//   > {
//   // setOpen: (val: boolean) => void;
//   loadData: () => any;
// }
// const AutocompleteInput = ({
//   loading,
//   // options,
//   // open,
//   // setOpen,
//   renderInput,
//   loadData,
// }: AutocompleteInputProps) => {
//   const [open, setOpen] = useState(false);
//   const [options, setOptions] = useState<any>([]);
//   //   const loading = open && options.length === 0;

//   useEffect(() => {
//     let active = true;

//     if (!loading) {
//       return undefined;
//     }

//     (async () => {
//       const result = await loadData(); // For demo purposes.

//       if (active) {
//         setOptions(result);
//       }
//     })();

//     return () => {
//       active = false;
//     };
//   }, [loading]);

//   useEffect(() => {
//     if (!open) {
//       setOptions([]);
//     }
//   }, [open]);

//   return (
//     <Autocomplete
//       id="asynchronous-demo"
//       sx={{ width: 300 }}
//       open={open}
//       onOpen={() => {
//         setOpen(true);
//       }}
//       onClose={() => {
//         setOpen(false);
//       }}
//       isOptionEqualToValue={(option, value) => option.title === value?.title}
//       // eslint-disable-next-line @typescript-eslint/no-unsafe-return
//       getOptionLabel={(option) => option?.title}
//       options={options}
//       loading={loading}
//       renderInput={renderInput}
//     />
//   );
// };

const AutocompleteInput = () => <p>dj</p>;

export default AutocompleteInput;
