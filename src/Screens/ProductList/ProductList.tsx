import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import styles from "./styles.module.css"

export const ProductList = ({productRealList}) => {

  
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

const limitText = (text: string | undefined, limit: number) =>
  text ? (text?.length > limit ? text.slice(0, limit) + "..." : text) : text;

  return (
   <div>
     {productRealList && productRealList.length > 1 ? (
            <TableContainer
              style={{
                marginTop: "35px",
                borderRadius: "17px",
                borderTop: "0.5px solid rgba(52, 68, 55, 0.3)",
              }}
              component={Paper}
            >
            
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableBody>
                    <StyledTableRow>
                      <StyledTableCell>
                        <h2 className={"Tabletitle"}>Product Name</h2>
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <h2 className={"Tabletitle"}>Product Type</h2>
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <h2 className={"Tabletitle"}>Product Description</h2>
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <h2 className={"Tabletitle"}>Product Status</h2>
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <h2 className={"Tabletitle"}>Date created</h2>
                      </StyledTableCell>
                      <StyledTableCell align="right"></StyledTableCell>
                    </StyledTableRow>

                    <>
                      {productRealList?.map((row) => (
                        <StyledTableRow key={row.id}>
                          <StyledTableCell component="th" scope="row">
                            <div className={styles.companyLogo}>
                             
                              <h3 className={"TablesubText"}>
                                {row.name}
                              </h3>
                            </div>
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            <h3 className={"TablesubText"}>{row.type}</h3>
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            <h3
                              
                            >
                              {row.description}
                            </h3>
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            <h3
                              className={"TablesubText"}
                            >{`${row.productStatus}`}</h3>
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            <h3
                              className={"TablesubText"}
                            >{`${row.dateCreated}`}</h3>
                           
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            <h2>
                              Buy this product
                            </h2>
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </>
                  </TableBody>
                </Table>
              
            </TableContainer>
          ) : (
            <>
            <h1>There are no Products Avaliable</h1>
            </>
          )}
   </div>
  )
}