import "./styles.css";
import { AreaSelect } from "./components/AreaSelect";
import { ServiceSelect } from "./components/ServiceSelect";
import { GenreSelect } from "./components/GenreSelect";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Grid, Button, SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";

export const App = () => {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    // NHK番組表APIのエンドポイントとアクセスキーを設定
    const apiUrl = "https://api.nhk.or.jp/v2/pg/list/130/g1/2023-08-14.json";
    const apiKey = "vIwwo0nBtxJUnw5A0sSsq9is4n8O6QM3";

    // APIリクエストを行う関数
    const fetchPrograms = async () => {
      try {
        const response = await fetch(`${apiUrl}?key=${apiKey}`);
        const data = await response.json();
        setPrograms(data.list.g1);
      } catch (error) {
        console.error("Error fetching NHK programs:", error);
      }
    };

    fetchPrograms();
  }, []);
  // const [area, setArea] = useState<string | HTMLInputElement>();
  // const [service, setService] = useState<string | HTMLInputElement>();
  // const [genre, setGenre] = useState<string | HTMLInputElement>();
  // const [date, setDate] = useState<Date | null>(null);

  // const onClickSearch = () => {
  //   // NHK APIのエンドポイントとアクセスキーを設定
  //   const apiUrl = `https://api.nhk.or.jp/v2/pg/list/010/g1/2022-12-10.json?key="vIwwo0nBtxJUnw5A0sSsq9is4n8O6QM3"`;

  //   // APIリクエストを行う関数
  //   const fetchNews = async () => {
  //     try {
  //       const response = await fetch(apiUrl);
  //       const data = await response.json();
  //       console.log(data);
  //       setNews(data.articles); // 受け取ったデータをstateにセット
  //     } catch (error) {
  //       console.error("Error fetching NHK news:", error);
  //     }
  //   };

  //   fetchNews();
  // };

  // const handleChange = (newValue: Date | null) => {
  //   setDate(newValue);
  // };
  // const onChangeArea = (event: SelectChangeEvent<HTMLInputElement>) => {
  //   setArea(event.target.value);
  // };
  // const onChangeService = (event: SelectChangeEvent<HTMLInputElement>) => {
  //   setService(event.target.value);
  // };
  // const onChangeGenre = (event: SelectChangeEvent<HTMLInputElement>) => {
  //   setGenre(event.target.value);
  // };

  return (
    <div className="App">
      {/* <Grid container alignItems="center">
        <Grid item xs={3}>
          <AreaSelect onChange={onChangeArea} />
        </Grid>
        <Grid item xs={3}>
          <ServiceSelect onChange={onChangeService} />
        </Grid>
        <Grid item xs={3}>
          <GenreSelect onChange={onChangeGenre} />
        </Grid>
        <Grid item xs={3}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                sx={{ width: "200px" }}
                format="YYYY-MM-DD"
                label="Basic date picker"
                value={date}
                onChange={handleChange}
              />
            </DemoContainer>
          </LocalizationProvider>{" "}
        </Grid>
      </Grid>
      <Button
        sx={{ width: "100px", marginTop: "5px", textAlign: "center" }}
        variant="contained"
        type="submit"
        onClick={onClickSearch}
      >
        検索
      </Button> */}
      <div>
        <ul>
          {programs.map((program, index) => (
            <li key={index}>{program.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
