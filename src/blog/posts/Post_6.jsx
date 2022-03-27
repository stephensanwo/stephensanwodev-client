import React, { Fragment } from "react";
import Paragraph from "../../blog/components/Paragraph";
import Code from "../components/Code";
import ListItem from "../../blog/components/ListItem"


const Post_6 = () => {

  return (
    <Fragment>
      <Paragraph>
      This code snippet helps setup base logging for your applications in python. 
        <ListItem>
        Logging Format helps set the format of your logs
        </ListItem>

        <ListItem>
        File name helps save the logs in a txt file. File format can be empty if you just want logs in the CLI
        </ListItem>

        <ListItem>
        Level helps limit the logged information to the level of information you are interested in logging        </ListItem>

      </Paragraph>

      <Paragraph>
      There are various logging levels to be aware of
      <ListItem>
      <strong>DEBUG: </strong>Detailed information, typically of interest only when diagnosing problems
      </ListItem>

      <ListItem>
      <strong>INFO: </strong>Confirmation that things are working as expected
      </ListItem>

      <ListItem>
      <strong>WARNING: </strong> An indication that something unexpected happened, or indicative of some problem in the near future (e.g. ‘disk space low’). The software is still working as expected
      </ListItem>

      <ListItem>
      <strong>ERROR: </strong> Due to a more serious problem, the software has not been able to perform some function
      </ListItem>

      <ListItem>
      <strong>CRITICAL: </strong> A serious error, indicating that the program itself may be unable to continue running
      </ListItem>
      </Paragraph>
      <Code language = "py">
        {`import logging

FILENAME = "filepath for your logging file.txt"
LOG_FORMAT = "%(levelname)s %(asctime)s %(message)s"
logging.basicConfig(filename=FILENAME,
                    level=logging.DEBUG,
                    format=LOG_FORMAT)

logger = logging.getLogger()


def logging_test():
    
    logger.debug("Debug")
    logger.info("Info")
    logger.warning("Warning")
    logger.error("Error")
    logger.critical("Critical")
    return None
`}

      </Code>
     

    </Fragment>
  );
};

export default Post_6;
